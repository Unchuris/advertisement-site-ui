import { get, post } from '../../utils/fetcher';
import {
  SET_APP_DATA_PROFILE,
  EDIT_PROFILE,
} from '../../utils/actionTypes';

export function getProfile() {
  return (dispatch) => {
    get('/api/profile')
      .then((response) => {
        dispatch({
          type: SET_APP_DATA_PROFILE,
          data: response.result,
        });
      });
  };
}
export function editProfile(profile) {
  return (dispatch) => {
    post('/api/profile/edit', {
      Email: profile.Email,
      Name: profile.Name,
      Phone: profile.Phone,
      Bio: profile.Bio,
      Id: profile.Id,
    })
      .then((response) => {
        dispatch({
          type: EDIT_PROFILE,
          result: response,
        });
      });
  };
}

