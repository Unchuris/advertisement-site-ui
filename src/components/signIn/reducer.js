import { SIGN_IN } from '../../utils/actionTypes';

export default (state = { success: []}, action) => {
  switch (action.type) {
    case SIGN_IN: {
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