import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

import { deleteFav } from "../../../store/actions/";
import fetchApiAction from "../../../services/fetchApi";
import searchItemAction from "../../../store/actions/";

const FavItem = props => {
  const searchFav = async cityId => {
    const { fetchApi } = props;
    try {
      await fetchApi(cityId);
      props.history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <p>{props.name}</p>
      <p>{props.temp}°C</p>
      <p>{props.condition}</p>
      <button
        onClick={() => {
          props.deleteFav(props.name);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          searchFav(props.name);
        }}
      >
        Search
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm.searchItem,
  reloadState: state.redirect
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteFav: deleteFav,
      searchItem: searchItemAction,
      fetchApi: fetchApiAction
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FavItem));
