import { get } from '../../utils/fetcher';
import { SET_APP_DATA_ADVERTISEMENTS } from '../../utils/actionTypes';

export function getAdvertisements() {
  return (dispatch) => {
    get('/adv')
      .then((response) => {
        dispatch({
          type: SET_APP_DATA_ADVERTISEMENTS,
          data: response.result,
        });
      });
  };
}

