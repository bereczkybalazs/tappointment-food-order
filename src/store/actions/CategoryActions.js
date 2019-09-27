import {GET_CATEGORIES_START, GET_CATEGORIES_SUCCESS} from "../constants/CategoryConstants";
import axios from "../../axios";

export const getCategories = () => {
    return dispatch => {
        dispatch({
            type: GET_CATEGORIES_START
        });
        axios.get('/categories.json')
            .then(response => {
                dispatch({
                    type: GET_CATEGORIES_SUCCESS,
                    categories: response.data
                })
            })
    }
};