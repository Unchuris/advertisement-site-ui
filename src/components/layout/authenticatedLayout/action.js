import { get, post } from '../../../utils/fetcher';
import { IS_AUTHENTICATED } from '../../../utils/actionTypes';
export function authenticated() {
  return (dispatch) => {
    get('/api/isAuthenticated')
      .then((response) => {
        dispatch({
          type: IS_AUTHENTICATED,
          success: response,
        });
      });
  };
}
export function logout() {
  return (dispatch) => {
    post('/api/logout')
      .then(() => {
        dispatch({
          type: IS_AUTHENTICATED,
          success: false,
        });
      });
  };
}

