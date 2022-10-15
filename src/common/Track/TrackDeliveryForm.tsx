import React, { useState } from "react";
import { Button, FormError, FormField } from "components";
import { useDispatch } from "react-redux";
import { shipmentProcess } from "redux/actions/ShipmentAction";
import { change, errorItem, getPredefinedErrors, isObj, quickValidation } from "utils";

export const TrackDeliveryForm: React.FC<Props> = ({ setTrackingData }) => {

    const dispatch = useDispatch();

    const initialState: stateType = {
        error: getPredefinedErrors(["deliveryType", "reference"]),
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

    const onChanged = (e: any, field: string) => {

        const validation = quickValidation(field, e, state);

        setState((prevState) => ({ ...prevState, [field]: e, error: validation, success: undefined }));

    }

    const getTrack = async () => {

        change(true, "loading", setState);

        const res = await dispatch(shipmentProcess("track", { reference: state?.reference }, true));

        if (typeof res !== "string" && isObj(res)) {

            setTrackingData(res);

            setState((prevState) => ({ ...prevState, loading: false, success: undefined }));

            return;

        }

        setState((prevState) => ({ ...prevState, loading: false, success: String(res) }));

        change(false, "loading", setState);

    }

    const preProcess = () => {

        if (state.success === true) return;

        setState((prevState) => ({ ...prevState, success: undefined, attempt: prevState.attempt + 1 }))

        if (!state?.reference || !state?.deliveryType || state.loading) return;

        if (formError) return;

        getTrack();

    }

    const keyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            preProcess();
        }
    }

    return (

        <>

            <div className="form-field-group form-field-group-no-shadows">

                <FormField
                    label="Delivery Type"
                    placeHolder={"Single / Bulk item delivery"}
                    type={"option"}
                    value={state?.deliveryType}
                    options={[{ label : "Single Item Delivery", value : 0 }, { label : "Bulk Delivery" , value : 1 }]}
                    error={state.attempt > 0 && errorItem(state?.error || {}, "deliveryType")}
                    onKeyDown={(e: React.KeyboardEvent) => keyDown(e)}
                    onChange={(e) => onChanged(e, "deliveryType")}
                />

                <FormField
                    label="Tracking/Shipping ID"
                    placeHolder={"enter your tracking or shipping ID"}
                    value={state?.reference}
                    onChange={(e) => onChanged(e, "reference")}
                    error={state.attempt > 0 && errorItem(state?.error || {}, "reference")}
                    onKeyDown={(e: React.KeyboardEvent) => keyDown(e)}
                    type={"plain"}
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
    reference?: string,
    deliveryType?: string,
    loading: boolean,
    attempt: number,
    error: {},
    success?: boolean | string,
    data?: {}
};

interface Props {
    setTrackingData(e: any): void
}
