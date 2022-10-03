import * as utilTypes from 'redux/types/utilTypes';
import { utilType } from 'types';

const initialState: utilType = {
    cities:
    {
        data: {},
        loader: false,
        error: false
    },
    states:
    {
        data: [
            {
                id: "1",
                name: "Lagos",
                localities: []
            }
        ],
        loader: false,
        error: false
    },
    countries:
    {
        data: [],
        loader: false,
        error: false
    }
};

const utilReducer = (state = initialState, action: { [key: string]: any }) => {

    switch (action.type) {

        case utilTypes.GET_CITIES_START:
            return {
                ...state,
                cities: {
                    ...state.cities,
                    loader: true
                }
            }

        case utilTypes.GET_CITIES_FAILURE:
            return {
                ...state,
                cities: {
                    ...state.cities,
                    loader: false
                }
            }

        case utilTypes.GET_STATES_START:
            return {
                ...state,
                states: {
                    ...state.states,
                    loader: true
                }
            }

        case utilTypes.GET_STATES_FAILURE:
            return {
                ...state,
                states: {
                    ...state.states,
                    loader: false
                }
            }

        case utilTypes.GET_COUNTRIES_START:
            return {
                ...state,
                countries: {
                    ...state.countries,
                    loader: true
                }
            };

        case utilTypes.GET_COUNTRIES_START:
            return {
                ...state,
                countries: {
                    ...state.countries,
                    loader: false
                }
            };

        case utilTypes.GET_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries: {
                    ...state.countries,
                    data: action.payload,
                    loader: false
                }
            };

        case utilTypes.GET_STATES_SUCCESS:

            return {

                ...state,

                states: {

                    ...state.states,

                    data: action.payload?.map((item: { id: number, stateName: string }) => ({

                        id: item.id,

                        name: item.stateName,

                    }))
                }
            }

        case utilTypes.GET_CITIES_SUCCESS:

            const currentCities = state?.cities?.data || {};

            currentCities[action?.payload?.body?.ref || 0] = action.payload.map((item: any) => ({ name: item.cityName, id: item.id }));

            return {

                ...state,

                cities: {

                    ...state.cities,

                    data: currentCities

                }

            }

        default:
            
            return state;
    }
};

export default utilReducer;
