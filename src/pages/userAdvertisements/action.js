import { get } from '../../utils/fetcher';
import { SET_APP_DATA_USER_ADVERTISEMENTS } from '../../utils/actionTypes';

export function getUserAdvertisements() {
  return (dispatch) => {
    get('/api/userAdvertisements')
      .then((response) => {
        dispatch({
          type: SET_APP_DATA_USER_ADVERTISEMENTS,
          data: response.result,
        });
      });
  };
}

