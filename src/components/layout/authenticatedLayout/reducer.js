import { IS_AUTHENTICATED } from '../../../utils/actionTypes';
export default (state = { success: false }, action) => {
  switch (action.type) {
    case IS_AUTHENTICATED: {
      return {
        ...state,
        success: action.success.result,
      };
    }
    default: {
      return state;
    }
  }
};