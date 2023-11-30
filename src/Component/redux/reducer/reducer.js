import { userArr } from "../../data";
import { ADD_CONTACT } from "../constant/contact";

const initialState = {
  userArr: userArr,
};

export let ContactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT: {
      let cloneUsers = [...state.userArr];
      cloneUsers.push(payload);
      return { ...state, userArr: cloneUsers };
    }

    default:
      return state;
  }
};
