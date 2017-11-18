import { post } from '../../utils/fetcher';
import { SIGN_UP } from '../../utils/actionTypes';

export function signUp(user) {
  return (dispatch) => {
    post('/api/signOut', {
      Signup: {
        Email: user.email,
        Password: user.password,
        Password2: user.repeatPassword,
        Username: user.name,
      },
    })
      .then((response) => {
        dispatch({
          type: SIGN_UP,
          data: response,
        });
      });
  };
}

