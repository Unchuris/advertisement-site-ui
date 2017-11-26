import { post } from '../../utils/fetcher';
import { CREATE_AD } from '../../utils/actionTypes';
export function createAd(ad) {
  return (dispatch) => {
    post('/api/ad/create', {
      Title: ad.Title,
      Text: ad.Text,
      Image: ad.Image,
    })
      .then((response) => {
        dispatch({
          type: CREATE_AD,
          result: response,
        });
      });
  };
}

