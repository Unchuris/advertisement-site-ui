import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import appCompReducerAdvertisements from '../pages/advertisements/reducer';
import appCompReducerSignIn from '../components/signIn/reducer';
import appCompReducerSignUp from '../components/signUp/reducer';
import appCompReducerCreateAdvertisement from '../pages/createAdvertisement/reducer';
import appCompReducerAuthenticated from '../components/layout/authenticatedLayout/reducer';

const appReducer = combineReducers({
  i18n: i18nReducer,
  appCompReducerAdvertisements,
  appCompReducerSignIn,
  appCompReducerSignUp,
  appCompReducerCreateAdvertisement,
  appCompReducerAuthenticated,
});

export default (state = {}, action) => {
  return appReducer(state, action);
};
