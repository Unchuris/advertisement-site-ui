import {
  SET_APP_DATA_ADVERTISEMENT,
  EDIT_ADVERTISEMENT,
} from '../../utils/actionTypes';

export default (state = { advertisement: []}, action) => {
  switch (action.type) {
    case SET_APP_DATA_ADVERTISEMENT: {
      return {
        ...state,
        advertisement: action.data,
      };
    }
    case EDIT_ADVERTISEMENT: {
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