import axios from 'service/axios';
import * as SubscribeActions from '../types/shipmentTypes';
import { accessToken, referenceToken, typeOfDispatch } from 'redux/store';
import { authProcess } from './AuthActions';

const dispatchActions = (
    type: "get-providers" | "get-provider-form" | "get-location" | "get-price" | "create-order" | "get-provider"
) => {

    switch (type) {

        case "get-providers":

            return ({
                start: SubscribeActions.RETRIEVE_PROVIDERS_START,
                success: SubscribeActions.RETRIEVE_PROVIDERS_SUCCESS,
                failure: SubscribeActions.RETRIEVE_PROVIDERS_FAILURE,
            });

        case "get-location":

            return ({
                start: SubscribeActions.RETRIEVE_LOCATIONS_START,
                success: SubscribeActions.RETRIEVE_LOCATIONS_SUCCESS,
                failure: SubscribeActions.RETRIEVE_LOCATIONS_FAILURE,
            });

        case "get-price":

            return ({
                start: SubscribeActions.RETRIEVE_PRICE_START,
                success: SubscribeActions.RETRIEVE_PRICE_SUCCESS,
                failure: SubscribeActions.RETRIEVE_PRICE_FAILURE
            });

        case "create-order":

            return ({
                start: SubscribeActions.CREATE_ORDER_START,
                success: SubscribeActions.CREATE_ORDER_SUCCESS,
                failure: SubscribeActions.CREATE_ORDER_FAILURE
            });

        case "get-provider":

            return ({
                start: SubscribeActions.RETRIEVE_PROVIDER_START,
                success: SubscribeActions.RETRIEVE_PROVIDER_SUCCESS,
                failure: SubscribeActions.RETRIEVE_PROVIDER_FAILURE
            });

        default:

            return ({
                start: SubscribeActions.RETRIEVE_PROVIDERS_FORM_START,
                success: SubscribeActions.RETRIEVE_PROVIDERS_FORM_SUCCESS,
                failure: SubscribeActions.RETRIEVE_PROVIDERS_FORM_FAILURE,
            });

    }

}

export const shipmentProcess = (
    type: "get-providers" | "get-provider-form" | "get-location" | "get-provider" | "get-price" | "create-order",
    body: {
        service?: string | number,
        provider?: string | number,
        address?: string
    } = {},
    returnData?: boolean | string,

) =>
    async (dispatch: typeOfDispatch) => {

        try {

            if (!accessToken()) {

                await (dispatch as any)(authProcess("retrieve-auth", { userName: "Awaal" }, true));

            }

            if ( type === "create-order" ) {

                // always generate a reference when attempting to create order

                await (dispatch as any)(authProcess("retrieve-reference", {}, true));

            }

            dispatch({
                type: dispatchActions(type).start,
                payload: { type, body }
            });

            const { data } = await axios.post('/api/shipment', { authType: type, ...{ ...body, reference: referenceToken() } });

            if ( data?.status === false ) {

                throw new Error(data.message);

            }

            if (returnData) {

                dispatch({
                    type: dispatchActions(type).success,
                    payload: data?.data || data
                });

                return returnData === "FULL" ? data : data.data;

            }

            dispatch({
                type: dispatchActions(type).success,
                payload: { data: data?.data || data, type, body }
            });

            return true;

        } catch (error: any) {

            const data = error?.response?.data;

            dispatch({
                type: dispatchActions(type).failure,
                payload: { type, data }
            });

            return data?.message || error?.message || false;
        }

    };
