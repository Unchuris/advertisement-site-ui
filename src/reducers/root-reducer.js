import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import appCompReducerAdvertisements from '../pages/advertisements/reducer';
import appCompReducerSignIn from '../components/signIn/reducer';
import appCompReducerSignUp from '../components/signUp/reducer';

const appReducer = combineReducers({
  i18n: i18nReducer,
  appCompReducerAdvertisements,
  appCompReducerSignIn,
  appCompReducerSignUp,
});

export default (state = {}, action) => {
  return appReducer(state, action);
};
