import React, { useEffect, useState } from 'react';
import { Button, FormError, FormField } from 'components';
import { change, errorItem, getPredefinedErrors, quickValidation } from 'utils';
import { useDispatch } from 'react-redux';
import { authProcess, resetApp } from 'redux/actions';

export const IndividualSubscriptionForm: React.FC<{ onClose : () => void}> = ({ onClose }) => {

    const dispatch = useDispatch();

    const initialState = {
        email: "",
        error: getPredefinedErrors(["email"]),
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
           
            "email": state?.email,

        };

        const response: any = await dispatch(authProcess("subscribe", body));

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

                <h1 className='mb-5'> Business / Individual </h1>

                <FormField
                    label='Email'
                    placeHolder={"input your email address"}
                    value={state.email}
                    onChange={(e: any) => onChanged(e, "email")}
                    error={state.attempt > 0 &&  errorItem(state?.error || {}, "email")}
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
