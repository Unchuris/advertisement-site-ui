import {
  SET_APP_DATA_PROFILES,
} from '../../utils/actionTypes';

export default (state = { profiles: []}, action) => {
  switch (action.type) {
    case SET_APP_DATA_PROFILES: {
      return {
        ...state,
        profiles: action.data,
      };
    }
    default: {
      return state;
    }
  }
};