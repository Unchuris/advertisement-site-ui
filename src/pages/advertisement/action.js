import { get, post } from '../../utils/fetcher';
import { SET_APP_DATA_ADVERTISEMENT,  EDIT_ADVERTISEMENT} from '../../utils/actionTypes';

export function getAdvertisement(id) {
  return (dispatch) => {
    get(`/api/adv/${id}`)
      .then((response) => {
        dispatch({
          type: SET_APP_DATA_ADVERTISEMENT,
          data: response.result,
        });
      });
  };
}
export function editAdvertisement(ad) {
  return (dispatch) => {
    post('/api/edit', {
      Title: ad.Title,
      Text: ad.Text,
      Image: ad.Image,
      Id: ad.Id,
    })
      .then((response) => {
        dispatch({
          type: EDIT_ADVERTISEMENT,
          result: response,
        });
      });
  };
}

