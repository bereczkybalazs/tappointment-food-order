import {GET_CATEGORIES_SUCCESS} from "../constants/CategoryConstants";

const initialState = {
  categories: null
};


const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories
      };
    default:
      return state
  }
};

export default AppReducer;