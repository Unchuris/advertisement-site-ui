import {
  SET_APP_DATA_USER_ADVERTISEMENTS,
} from '../../utils/actionTypes';

export default (state = { advertisements: []}, action) => {
  switch (action.type) {
    case SET_APP_DATA_USER_ADVERTISEMENTS: {
      return {
        ...state,
        advertisements: action.data,
      };
    }
    default: {
      return state;
    }
  }
};