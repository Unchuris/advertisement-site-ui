import { CREATE_AD } from '../../utils/actionTypes';

export default (state = { success: []}, action) => {
  switch (action.type) {
    case CREATE_AD: {
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