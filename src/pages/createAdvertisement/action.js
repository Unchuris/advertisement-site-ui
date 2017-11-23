import { post } from '../../utils/fetcher';
import { CREATE_AD } from '../../utils/actionTypes';
export function createAd(ad) {
  return (dispatch) => {
    post('/api/signUp', {
      Signup: {
      },
    })
      .then((response) => {
        dispatch({
          type: CREATE_AD,
          result: response,
        });
      });
  };
}

