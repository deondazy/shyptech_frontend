import React, { useState } from "react";
import { Button, FormError, FormField } from "components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { shipmentProcess } from "redux/actions/ShipmentAction";
import { providerFormType, storeInterface } from "types";
import { change, errorItem, getPredefinedErrors, isObj, quickValidation } from "utils";

export const DeliveryServiceSelector: React.FC<Props> = ({ onSelectionSuccess }) => {

    const dispatch = useDispatch();

    const { shipment: { services } }: storeInterface = useSelector((store: storeInterface) => store);

    const initialState: stateType = {
        error: getPredefinedErrors(["provider", "service"]),
        loading: false,
        attempt: 0,
        success: undefined,
        data: undefined
    };

    const [state, setState] = useState(initialState);

    const formError = Object.values(state.error || {}).map(item => item).filter((item) => Array.isArray(item)).length > 0;

    const errorText = typeof state.success === "string" ? state.success : "";

    const disabled = () => {

        if (state.attempt > 0) return formError;

        return false;

    }

    const providers = () => {

        const selectedService = services?.find(item => item?.id === state?.service?.value);

        if (selectedService) {

            return selectedService?.providers?.map(item => ({ label: item.providerName, value: item.providerId }));

        }

        return [];

    }

    const onChanged = (e: any, field: string) => {

        const validation = quickValidation(field, e, state);

        setState((prevState) => ({ ...prevState, [field]: e, error: validation, success: undefined }));

    }

    const getProviderForm = async () => {

        change(true, "loading", setState);

        const res = await Promise.all([

            await dispatch(shipmentProcess("get-provider-form", { provider: state?.provider?.value }, true)),

            await dispatch(shipmentProcess("get-provider", { provider: state?.provider?.value }, true))

        ]) as { provider?: { [key: string]: any }, form?: { [key: string]: any } }[] | string;

        if (typeof res !== "string" && isObj(res[0]?.provider) && isObj(res[0]?.form) && isObj(res[1])) {

            const data = {

                provider: { ...res[0].provider, ...res[1] , providerId: state?.provider?.value  },

                form: res[0].form

            } as any;

            onSelectionSuccess(data);

            setState((prevState) => ({ ...prevState, loading: false, success : undefined }));

            return;

        }

        setState((prevState) => ({ ...prevState, loading: false, success: String(res) }));

        change(false, "loading", setState);

    }

    const preProcess = () => {

        if (state.success === true) return;

        setState((prevState) => ({ ...prevState, success: undefined, attempt: prevState.attempt + 1 }))

        if (!state?.service?.value || !state?.provider?.value || state.loading) return;

        if (formError) return;

        getProviderForm();

    }

    const keyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            preProcess();
        }
    }

    return (

        <>

            <div className="form-field-group">

                <h1 className="text-center color-darker mb-4"> Send Item </h1>

                <FormField
                    label="Delivery Service"
                    placeHolder={"What delivery service do you want today?"}
                    type={"option"}
                    value={state?.service}
                    options={services?.map(item => ({ label: item.name || "Service - Zero", value: item.id }))}
                    error={state.attempt > 0 && errorItem(state?.error || {}, "service")}
                    onKeyDown={(e: React.KeyboardEvent) => keyDown(e)}
                    onChange={(e) => onChanged(e, "service")}
                />

                <FormField
                    label="Delivery Company"
                    placeHolder={"Select a delivery company?"}
                    options={providers()}
                    value={state?.provider}
                    onChange={(e) => onChanged(e, "provider")}
                    error={state.attempt > 0 && errorItem(state?.error || {}, "provider")}
                    onKeyDown={(e: React.KeyboardEvent) => keyDown(e)}
                    type={"option"}
                />

                <FormError
                    text={errorText}
                    condition={errorText !== ""}
                // className={state.success === true ? "newsletter-form-success" : undefined}
                />

                <Button
                    label={state.loading ? "Please wait..." : "Continue"}
                    disabled={disabled()}
                    onClick={() => preProcess()}
                />

            </div>

        </>

    )

}

type stateType = {
    service?: { key: string, value: number },
    provider?: { key: string, value: number },
    loading: boolean,
    attempt: number,
    error: {},
    success?: boolean | string,
    data?: {}
};

interface Props {
    onSelectionSuccess(e: providerFormType): void
}
