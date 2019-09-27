import {FETCH_CATEGORIES_SUCCESS} from "./CategoryConstants";

const initialState = {
    categoryList: []
};

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categoryList: action.categories
            };
        default:
            return state
    }
};

export default CategoryReducer;