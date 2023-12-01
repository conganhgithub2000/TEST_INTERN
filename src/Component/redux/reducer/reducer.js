import { userArr } from "../../data";
import { ADD_CONTACT, SEARCH_CONTACT } from "../constant/contact";

const initialState = {
  userArr: userArr,
  arrSearch: [],
};

export let ContactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT: {
      let cloneUsers = [...state.userArr];
      cloneUsers.push(payload);
      return { ...state, userArr: cloneUsers };
    }
    case SEARCH_CONTACT: {
      return { ...state, arrSearch: payload };
    }

    default:
      return state;
  }
};
