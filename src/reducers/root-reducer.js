import { combineReducers } from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import appCompReducerAdvertisements from '../pages/advertisements/reducer';

const appReducer = combineReducers({
  i18n: i18nReducer,
  appCompReducerAdvertisements,
});

export default (state = {}, action) => {
  return appReducer(state, action);
};
