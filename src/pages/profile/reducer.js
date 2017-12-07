import {
  SET_APP_DATA_PROFILE,
  EDIT_PROFILE,
} from '../../utils/actionTypes';

export default (state = { profiles: []}, action) => {
  switch (action.type) {
    case SET_APP_DATA_PROFILE: {
      return {
        ...state,
        profile: action.data,
      };
    }
    case EDIT_PROFILE: {
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