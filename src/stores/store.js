/**
 * Project store.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root-reducer';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import translationsObject from '../localization/translationsObject';

const newStore = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

syncTranslationWithStore(newStore);
newStore.dispatch(loadTranslations(translationsObject));
newStore.dispatch(setLocale('en_EN'));

export default newStore;