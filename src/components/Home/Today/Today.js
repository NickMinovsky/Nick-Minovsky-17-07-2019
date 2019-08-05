import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addFav } from "../../../store/actions/";
import isAdded from "../../../services/DuplicateValidation";

import "./Today.css";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const Today = props => {
  const { data } = props;
  if (data.location === undefined) {
    return <p> </p>;
  }

  const addFavHandler = () => {
    const { current, location } = data;
    const { favList, addFav } = props;
    const favCityData = {
      name: location.name,
      temp: current.temp_c,
      condition: current.condition.text,
      icon: current.condition.icon
    };
    if (!isAdded(favList, location.name)) {
      addFav(favCityData);
    } else {
      console.log("already in");
    }
  };

  const { current, location } = data;
  return (
    <div className="current-weather">
      <div className="current-weather__circle lined thin">
        <h1 className="current-weather__circle-title">{location.name}</h1>
        <p className="current-weather__circle-desc">{current.condition.text}</p>
        <img
          src={current.condition.icon}
          alt="weather-icon"
          className="current-weather__image"
        />
        <p className="current-weather__circle-degree">{current.temp_c} °C</p>
      </div>
      <p className="fav-error">{props.error} </p>
      <div>
        <button
          className="fav-btn"
          variant="contained"
          color="primary"
          onClick={() => {
            addFavHandler();
          }}
        >
          add
          <div className="fav-icon">
            {isAdded(props.favList, location.name) ? (
              <Favorite className="fav-icon__animate" />
            ) : (
              <FavoriteBorder />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.apiData.data,
  error: state.apiData.error.message,
  favList: state.favoritesList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addFav: addFav
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Today);
