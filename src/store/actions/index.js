import {
  ADD_FAV,
  GET_DATA_PENDING,
  GET_DATA_ERROR,
  GET_DATA_SUCCESS,
  SEARCH_ITEM,
  DELETE_FAV,
  INPUT_ERROR,
  FAV_ERROR
} from "./types";

// Data api fetching
export const getDataPending = () => ({
  type: GET_DATA_PENDING
});

export const getDataSuccess = data => ({
  type: GET_DATA_SUCCESS,
  payload: data
});

export const getDataError = error => ({
  type: GET_DATA_ERROR,
  error: error
});

// Navbar search
const searchItem = inputTerm => ({
  type: SEARCH_ITEM,
  payload: inputTerm
});

export default searchItem;

// Favorites
export const addFav = favData => ({
  type: ADD_FAV,
  payload: favData
});

export const deleteFav = cityId => ({
  type: DELETE_FAV,
  payload: cityId
});

// Error Handleing
export const inputError = message => ({
  type: INPUT_ERROR,
  payload: message
});
