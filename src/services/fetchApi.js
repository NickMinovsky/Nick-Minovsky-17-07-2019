import { getDataPending, getDataSuccess, getDataError } from "../store/actions";

const API_KEY = "dab15c856a2d47f388293819190107";

const fetchApi = term => {
  return dispatch => {
    dispatch(getDataPending());
    fetch(
      `http://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${term}&days=6`
    )
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(getDataSuccess(res));
        dispatch(getDataError(""));
        return res;
      })
      .catch(error => {
        dispatch(getDataError(error));
      });
  };
};

export default fetchApi;
