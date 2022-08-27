import axios from 'service/axios';
import * as AuthActions from '../types/authTypes';
import { accessToken, referenceToken, store, typeOfDispatch } from 'redux/store';

export const renewAuthToken = async () => {

    try {

        store.dispatch({ type: AuthActions.REFRESH_TOKEN_START });

        const { data } = await axios.post('/api/auth', { authType: "refresh-token", refreshtoken: store?.getState()?.auth?.refreshtoken });

        store.dispatch({ type: AuthActions.REFRESH_TOKEN_SUCCESS, payload: data });

        return true;

    } catch (error: any) {

        const data = error?.response?.data;

        store.dispatch({ type: AuthActions.REFRESH_TOKEN_FAILURE, payload: data });

        return data?.error?.message || false;

    }
}

const dispatchActions = (
    type?: "retrieve-reference" | "retrieve-auth" | "subscribe" | "subscribe-business",
) => {

    switch (type) {

        case "retrieve-reference":

            return ({
                start: AuthActions.RETRIEVE_REFERENCE_START,
                success: AuthActions.RETRIEVE_REFERENCE_SUCCESS,
                failure: AuthActions.RETRIEVE_REFERENCE_FAILURE,
            });

        case "retrieve-auth":

            return ({
                start: AuthActions.RETRIEVE_AUTH_START,
                success: AuthActions.RETRIEVE_AUTH_SUCCESS,
                failure: AuthActions.RETRIEVE_AUTH_FAILURE
            });

        case "subscribe-business":

            return ({
                start: AuthActions.SUBSCRIBE_NEWSLETTER_BUSINESS_START,
                success: AuthActions.SUBSCRIBE_NEWSLETTER_BUSINESS_SUCCESS,
                failure: AuthActions.SUBSCRIBE_NEWSLETTER_BUSINESS_FAILURE
            })

        default:

            return ({
                start: AuthActions.SUBSCRIBE_NEWSLETTER_START,
                success: AuthActions.SUBSCRIBE_NEWSLETTER_SUCCESS,
                failure: AuthActions.SUBSCRIBE_NEWSLETTER_FAILURE,
            });

    }

}

export const authProcess = (
    type: "retrieve-reference" | "subscribe" | "retrieve-auth" | "subscribe-business",
    body: {
        email?: string,
        reference?: string,
        userName?: string,
        personalName?: string,
        businessName?: string,
        phoneNumber?: string,
        emailAddress?: string,
        stateId?: string
    } = {},
    returnData?: boolean | null,
    returnFullResponse?: boolean | null,

) =>
    async (dispatch: typeOfDispatch) => {

        try {

            const isSubscribing = ["subscribe-business", "subscribe"].includes(type);

            if (!accessToken() && isSubscribing) {

                await (dispatch as any)(authProcess("retrieve-auth", { userName: "Awaal" }, true));

            }

            if (!referenceToken() && isSubscribing) {

                await (dispatch as any)(authProcess("retrieve-reference", {}, true));

            }

            dispatch({
                type: dispatchActions(type).start,
                payload: { type, body }
            });

            const { data } = await axios.post('/api/subscribe', { authType: type, ...{ ...body, reference: referenceToken() } });

            if (returnData) {

                dispatch({
                    type: dispatchActions(type).success,
                    payload: data?.data || data
                });

                return returnFullResponse ? data : data.data;

            }

            dispatch({
                type: dispatchActions(type).success,
                payload: { data, type, body }
            });

            return true;

        } catch (error: any) {

            const data = error?.response?.data;

            dispatch({
                type: dispatchActions(type).failure,
                payload: { type, data }
            });

            return data?.message || false;
        }

    };

export const resetApp = () => async (dispatch: typeOfDispatch) => {
    try {
        dispatch({ type: AuthActions.RESET_APP_START });
        dispatch({ type: AuthActions.RESET_APP });
        dispatch({ type: AuthActions.RESET_APP_SUCCESS });
        return true;

    } catch (error: any) {
        dispatch({ type: AuthActions.RESET_APP_FAILURE });
    }
}
