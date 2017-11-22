import { SIGN_UP } from '../../utils/actionTypes';

export default (state = { success: []}, action) => {
  switch (action.type) {
    case SIGN_UP: {
      return {
        ...state,
        success: action.result,
      };
    }
    default: {
      return state;
    }
  }
};