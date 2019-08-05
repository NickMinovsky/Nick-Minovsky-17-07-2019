import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { deleteFav } from "../../../store/actions/";
import fetchApiAction from "../../../services/fetchApi";
import searchItemAction from "../../../store/actions/";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import Search from "@material-ui/icons/Search";

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
    <div className="fav-box">
      <div className="fav-item">
        <p className="fav-item__name"> {props.name}</p>
        <p className="fav-item__weather">{props.condition}</p>
        <p className="fav-item__degree">{props.temp}°C</p>
      </div>
      <div className="btns">
        <button
          className="fav-btn two"
          onClick={() => {
            props.deleteFav(props.name);
          }}
        >
          delete <DeleteForeverOutlinedIcon />
        </button>
        <button
          className="fav-btn two"
          onClick={() => {
            searchFav(props.name);
          }}
        >
          search <Search />
        </button>
      </div>
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
