import { useEffect } from 'react';
import { dateDifference } from 'utils/date';
import { store } from 'redux/store';
import * as WorkerTypes from 'redux/types/workerTypes';
import * as AuthTypes from 'redux/types/authTypes';
import { workerType } from 'types';
import { authProcess } from 'redux/actions';

export const useSessionTimeout = (
    isInSession: boolean,
) => {

    const refreshToken = async () => {

        const workerState: workerType = store?.getState()?.worker;

        const refreshStatus = workerState.refreshing;

        if (!refreshStatus) {

            //@ts-expect-error
            const val : any = await store.dispatch(authProcess("retrieve-auth" ,  { userName: "Awaal" }));

            if ( typeof val === "string" && val.toLowerCase().includes("expired") ) {

                store.dispatch({ type: WorkerTypes.CLEAR_ACTIVITY });

            }

        }

    }

    const comparison = async () => {

        const expiresAt = store?.getState()?.auth?.expiresAt;

        if (expiresAt) {

            const difference = dateDifference(new Date(expiresAt), new Date());

            if (difference.day < 0) {

                await refreshToken();

            }

        }

    }

    useEffect(() => {

        const interval = setInterval(() => comparison(), 1000);

        return (() => {
            clearInterval(interval);
        });

        // eslint-disable-next-line
    }, [isInSession]);

    useEffect(() => {

        if (window) {

            window.addEventListener("click", () => {

                store.dispatch({
                    type: WorkerTypes.ADD_ACTIVITY,
                    payload: new Date().toISOString()

                });

            }, false);

        }

        // eslint-disable-next-line
    }, []);

    useEffect(() => {

        store.dispatch({ type: AuthTypes.REFRESH_TOKEN_FAILURE });

    }, []);

};
