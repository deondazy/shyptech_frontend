import React, { useEffect, useState } from 'react';
import { Button, FormError, FormField } from 'components';
import { change, errorItem, getPredefinedErrors, quickValidation } from 'utils';
import { useDispatch } from 'react-redux';
import { authProcess, resetApp } from 'redux/actions';
import { useSelector } from 'react-redux';
import { storeInterface } from 'types';
import { FormFieldPhoneBox } from 'components/FormField/PhoneBox';

export const AgentSubscriptionForm: React.FC<{ onClose : () => void}> = ({ onClose }) => {

    const dispatch = useDispatch();

    const { util: { states } }: storeInterface = useSelector((store: storeInterface) => store);

    const initialState = {
        email: "",
        error: getPredefinedErrors(["email", "business", "fullName", "mobile", "state"]),
        loading: false,
        attempt: 0,
        success: undefined
    };

    const [state, setState] = useState<stateType>(initialState);

    const onChanged = (e: any, field: string) => {

        e = field === "state" ? e : ["mobile", "email"]?.includes(field) ? String(e).trim() : String(e);

        const validation = quickValidation(field, e, state);

        setState((prevState) => ({ ...prevState, [field]: e, error: validation, success: undefined }));

    }

    const formError = Object.values(state.error || {}).map(item => item).filter((item) => Array.isArray(item)).length > 0;

    const disabled = () => {

        if (state.attempt > 0) return formError;

        return false;

    }

    const subscribe: () => void = async () => {

        change(true, "loading", setState);

        const body =

        {
            "personalName": state?.fullName,
            "businessName": state?.business,
            "phoneNumber": state?.mobile,
            "emailAddress": state?.email,
            "stateId": state?.state?.value
        };

        const response: any = await dispatch(authProcess("subscribe-business", body));

        setState((prevState) => ({ ...prevState, success: response, loading: false }));

    };

    const preProcess = () => {
        if (state.success === true) return;
        setState((prevState) => ({ ...prevState, success: undefined, attempt: prevState.attempt + 1 }))
        if (!state?.email || state.loading) return;
        if (formError) return;
        subscribe();
    }

    const keyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            preProcess();
        }
    }

    useEffect(() => {

        if (state.success === true) {
            setTimeout(() => {

                onClose();

                dispatch(resetApp());

            }, 5000);
        }

        // eslint-disable-next-line
    }, [state.success]);

    const errorText = typeof state.success === "string" ? state.success : errorItem(state?.error || {}, "email");

    const extraProps = {
        className: "",
        disabled: state.success === true,
        onKeyDown: (e: React.KeyboardEvent) => keyDown(e)
    };

    return (

        <div

            className='newsletter-form'
            id={"news-letter"}
        >

            <div>

                <h1 className='mb-5'> Delivery Company / Agents </h1>

                <FormField
                    label='Email'
                    placeHolder={"input your email address"}
                    value={state.email}
                    onChange={(e: any) => onChanged(e, "email")}
                    error={state.attempt > 0 &&  errorItem(state?.error || {}, "email")}
                    {...extraProps}
                />

                <FormField
                    label='Personal Name'
                    placeHolder={"input your personal name"}
                    value={state.fullName}
                    onChange={(e: any) => onChanged(e, "fullName")}
                    error={state.attempt > 0 && errorItem(state.error, "fullName")}
                    {...extraProps}
                />

                <FormField
                    label='Business Name'
                    placeHolder={"input your business name"}
                    value={state.business}
                    onChange={(e: any) => onChanged(e, "business")}
                    error={state.attempt > 0 && errorItem(state.error, "business")}
                    {...extraProps}
                />

                <FormFieldPhoneBox
                    label='Phone Number'
                    value={state.mobile}
                    placeHolder={"your phone number"}
                    onChange={(e: any) => onChanged(e, "mobile")}
                    error={state.attempt > 0 && errorItem(state.error, "mobile")}
                    {...extraProps}

                />

                <FormField
                    label='State'
                    type={"option"}
                    options={states.data.map(item => ({ label: item.name, value: item.id }))}
                    onlyNumber={true}
                    placeHolder={"select your state"}
                    value={state?.state?.label}
                    onChange={(e: any) => onChanged(e, "state")}
                    error={state.attempt > 0 && errorItem(state.error, "state")}
                    {...extraProps}
                />

                <FormError text={errorText} condition={ typeof state.success === "string"} />

                <Button
                    label={(state.success === true) ? "You will be notified" : (state.loading ? "Please wait..." : "Join")}
                    onClick={() => preProcess()}
                    disabled={disabled()}
                    className={state.success === true ? "button-success" : ""}
                />

            </div>

        </div>

    );

}

type stateType = {
    fullName?: string,
    error: { [key: string]: {} },
    isBusiness?: boolean,
    loading: boolean,
    attempt: number,
    success?: boolean,
    email?: string,
    business?: string,
    mobile?: string,
    emailAddress?: string,
    state?: { label: string, value: string }
}
