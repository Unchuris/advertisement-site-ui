import { get } from '../../utils/fetcher';
import { SET_APP_DATA_PROFILES } from '../../utils/actionTypes';

export function getProfiles() {
  return (dispatch) => {
    get('/api/profiles')
      .then((response) => {
        dispatch({
          type: SET_APP_DATA_PROFILES,
          data: response.result,
        });
      });
  };
}

