import { combineReducers } from 'redux';
import auth from './authReducer';
import route from './routerReducer';
import shipment from './shipmentReducer';
import toast from './toastReducer';
import user from './userReducer';
import util from './utilReducer';
import worker from './workerReducer';

const allReducers = combineReducers({
  auth,
  route,
  shipment,
  toast,
  user,
  util,
  worker
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'RESET_APP') {
    state = state?.util ? { util: state?.util } : undefined;
  }
  return allReducers(state, action);
};

export default (state: any, action: { [key: string]: any }) => {
  return rootReducer(action.type === 'RESET_APP_SUCCESS' ? { auth: { loggedIn: false }, util : state.util } : { ...state, ...auth }, action);
};
