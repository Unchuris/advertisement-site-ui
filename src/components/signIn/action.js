import { post } from '../../utils/fetcher';
import { SIGN_IN } from '../../utils/actionTypes';

export function signIn(user) {
  return (dispatch) => {
    post('/api/signIn', {
      Login: {
        Password: user.password,
        Username: user.name,
      },
    })
      .then((response) => {
        dispatch({
          type: SIGN_IN,
          data: response,
        });
      });
  };
}

