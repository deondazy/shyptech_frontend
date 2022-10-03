import * as authTypes from 'redux/types/shipmentTypes';

const initialState = {
    services: [{ id: "1" }]
};

const shipmentReducer = (state = initialState, action: { [key: string]: any }) => {

    switch (action.type) {

        case authTypes.RETRIEVE_PROVIDERS_SUCCESS:

            return {
                
                ...state,
                
                services: state.services.map(item =>

                    item.id === action?.payload?.body?.service ?

                        { ...item, providers: action.payload?.data }

                        : item

                )
            
            }

        default:
            return state;
    }

};

export default shipmentReducer;
