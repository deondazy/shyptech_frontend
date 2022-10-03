import React, { useEffect, useState } from "react";
import { Button, ComponentHolder, FormError, FormField, ProgressTab } from "components";
import { dropDownItemGenerator, errorItem, getPredefinedErrors, isObj, quickValidation, reformRequest } from "utils";
import { useDispatch } from "react-redux";
import { shipmentProcess } from "redux/actions/ShipmentAction";
import { getAddressInfo } from "redux/actions/UtilActions";
import { providerFormBlock, providerFormType, storeInterface } from "types";
import { useSelector } from "react-redux";
import { ConfirmShipmentPrice } from "./ConfirmShipmentPrice";

export const ProviderForm: React.FC<{ data?: providerFormType, inView: boolean, goBack(): void }> = ({ data, inView, goBack }) => {

    const { util: { states, cities } }: storeInterface = useSelector((store: storeInterface) => store);

    const dispatch = useDispatch();

    const [state, setState] = useState<{
        priceInfo?: { price: number },
        shipmentInfo?: { [key: string]: any },
        attempt: number,
        trigger: number,
        senderInfo?: { [key: string]: number | string | {} },
        receiverInfo?: { [key: string]: number | string | {} },
        itemInfo?: { [key: string]: number | string | {} },
        error: {},
        loading: boolean,
        step: number
    }>({
        attempt: 0,
        trigger: 0,
        error: {},
        loading: false,
        step: 0
    });

    const formError = (obj: { [key: string]: any }) => Object.values(obj).map(item => item).filter((item) => Array.isArray(item)).length > 0;

    const errorText = typeof state.priceInfo === "string" ? state.priceInfo : "";

    const disabled = (key: "senderInfo" | "receiverInfo" | "itemInfo") => {

        if ((state?.[key]?.attempt || 0) > 0) return formError(state?.[key]?.error || {}) || state.loading;

        return false;

    }

    const onChanged = (e: any, field: string, parentField: "senderInfo" | "receiverInfo" | "itemInfo") => {

        const validation = quickValidation(field, e, state?.[parentField] || {});

        setState((prevState) => ({

            ...prevState,

            [parentField]: { ...(state?.[parentField] || {}), error: validation, [field]: e },

            priceInfo: undefined,

            success: undefined

        }));

    };

    const enumTypes: { [key: string]: "plain" | "textarea" | "option" | "date" | "checkbox" | "image" | "phone" } =

    {
        1: "plain",
        2: "textarea",
        3: "option",
        4: "date",
        5: "checkbox",
        6: "image",
        7: "phone",
        8: "option"
    };

    const fieldTypes = (

        key: string,

        type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

    ): "plain" | "textarea" | "option" | "date" | "checkbox" | "image" | "phone" | "price-field" => {

        if (key === "value") return "price-field";

        if (key?.includes("phone")) return "phone";

        if (["receiverstate", "senderstate"]?.includes(key)) return "option";

        if (["itemtype", "shipmenttype", "vehicletype"].includes(key)) return "option";

        if (["deliveryimage"].includes(key)) return "image";

        return enumTypes[type];

    }

    const dropDownOptions = (key: string) => {

        const dropDownKeys = ["itemType", "shipmentType", "vehicleType", "senderLocality", "receiversLocality", "senderState", "receiverState"];

        if (!dropDownKeys.includes(key) || !data) return undefined;

        const key_ = key as "itemType" | "shipmentType" | "vehicleType" | "senderLocality" | "receiversLocality" | "senderState" | "receiverState";

        return dropDownItemGenerator(data, cities, states)?.[key_];

    };

    const form = (data?.form || {}) as providerFormBlock;

    const requestPrice = async (req: { [key: string]: any }) => {

        setState((prevState) => ({ ...prevState, loading: true }))

        const priceInfo = await dispatch(shipmentProcess("get-price", req, true));

        setState((prevState) => ({ ...prevState, priceInfo, loading: false }));

        if (priceInfo && isObj(priceInfo)) {

            setState((prevState) => ({ ...prevState, trigger: state.trigger + 1, shipmentInfo: req }))

        }

    }

    const goToTab = (key: string, index: number) => {

        setState((prevState) => ({ ...prevState, step: index }));

        window?.scrollTo({ behavior: "smooth", top: 0 });

    }

    const makePriceRequest = () => requestPrice({

        details: {

            ...(isObj(state?.itemInfo) ? reformRequest(state.itemInfo || {}) : {}),

            senderDetails: reformRequest(state?.senderInfo || {}),

            receiverDetails: reformRequest(state?.receiverInfo || {}),

        },

        "courier": 1,

        "deliveryType": 1,

        "courierProviderServices": data?.provider?.providerId

    });

    const preProcess = (key: "senderInfo" | "receiverInfo" | "itemInfo", nextIndex: number) => {

        const affectedEntity = state?.[key];

        if (state.loading) return;

        setState((prevState) => ({ ...prevState, [key]: { ...affectedEntity, attempt: ((affectedEntity?.attempt as number) || 0) + 1 } }));

        if (formError(affectedEntity?.error || {})) return;

        if (state.step === 2) {

            makePriceRequest();

            return;

        }

        goToTab(key, nextIndex);

    }

    const generatePredefinedErrors = () => {

        let errors: {

            [key: string]: {

                [key: string]: {

                    [key: string]: string | string[] | boolean

                }

            }

        } = {};

        Object.entries(form).forEach(([key, value]) => {

            const allFields = value.fields.map(item => item.key);

            errors[key] = { "error": getPredefinedErrors(allFields) };

        });

        console.log(errors)

        return errors;

    }

    const popProcess = () => {

        if (state.step === 0) {

            goBack();

            return;

        }

        setState((prevState) => ({ ...prevState, step: state.step - 1 }));

    };

    const buttonText = () => {

        if (state.loading) return "Please wait ...";

        if (state.step === 2) return "Get Pricing";

        return "Next"

    }

    useEffect(() => {

        if (data?.form) {

            dispatch(getAddressInfo("retrieve-states", {}));

            dispatch(getAddressInfo("retrieve-cities", {}));

            const errors = generatePredefinedErrors();

            setState((prevState) => ({ ...prevState, ...errors }));


        }

        // eslint-disable-next-line
    }, [data]);

    useEffect(() => {

        if (inView) setState((prevState) => ({ ...prevState, step: 0 }));

    }, [inView]);

    return (

        <>

            <ConfirmShipmentPrice

                shipmentInfo={state.shipmentInfo || {}}

                priceInfo={{ shypdeckShippingPrice: 0, ...(state.priceInfo || {}) }}

                onDismiss={() => setState((prevState) => ({ ...prevState, shipmentPrice: undefined }))}

                trigger={state.trigger}

            />

            <ComponentHolder

                onPop={() => popProcess()} withPopButton={true}

                className={"form-field-group-holder"}

            >

                <h2 className="text-center color-darker mb-5"> Delivery Information </h2>

                <ProgressTab

                    className={"mt-5"}

                    activeIndex={state.step}

                    tabs={[

                        ...Object.values(form).map((item, index) => ({

                            label: item.title,

                            onClick: () => goToTab(item.title, index)

                        })),

                        {
                            label: "Payment",
                            onClick: () => goToTab("payment", -1)

                        }


                    ]}

                />

                {Object.entries(form).map(([key, value], index) => {

                    let key_ = key as "senderInfo" | "receiverInfo" | "itemInfo";

                    return (

                        <React.Fragment key={`form-group-${index}`}>

                            {state.step === index &&

                                <ComponentHolder

                                    className={"form-field-group mt-5"}

                                >

                                    <h2 className="text-center color-primary mb-4"> {value.title}</h2>

                                    {value.fields.map((item, index_) =>

                                        <FormField

                                            type={fieldTypes(String(item?.key || "").toLowerCase(), item?.type)}

                                            key={`${value.title}-form-field-${index_}`}

                                            label={item.label}

                                            placeHolder={item.placeholder}

                                            className={`${key_}-field-${index_}`}

                                            onChange={(e) => onChanged(e, item.key, key_)}

                                            value={state?.[key_]?.[item.key]}

                                            options={dropDownOptions(item.key)}

                                            error={(state?.[key_]?.attempt || 0) > 0 && errorItem(state?.[key_]?.["error"] || {}, item.key)}

                                            onlyNumber={["weight", "quantity"].includes(item?.key)}

                                        />

                                    )}



                                    <>

                                        <FormError
                                            text={errorText || ""}
                                            condition={(typeof state.priceInfo === "string") && errorText !== undefined}
                                        />

                                        <Button

                                            disabled={disabled(key_)}

                                            onClick={() => preProcess(key_, index + 1)}

                                            label={buttonText()}

                                        />


                                    </>



                                </ComponentHolder>

                            }

                        </React.Fragment>

                    );

                }

                )}

            </ComponentHolder>

        </>

    );

}