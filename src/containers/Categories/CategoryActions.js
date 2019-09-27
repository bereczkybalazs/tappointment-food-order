import {GET_CATEGORIES_START, FETCH_CATEGORIES_SUCCESS} from "./CategoryConstants";
import axios from "../../lib/axios";

export const fetchCategories = () => {
    return dispatch => {
        dispatch({
            type: GET_CATEGORIES_START
        });
        axios.get('/categories.json')
            .then(response => {
                dispatch({
                    type: FETCH_CATEGORIES_SUCCESS,
                    categories: response.data
                })
            })
    }
};