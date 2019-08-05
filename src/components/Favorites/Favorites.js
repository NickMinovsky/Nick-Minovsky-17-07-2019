import React from "react";
import { connect } from "react-redux";

import FavItem from "./FavItem/FavItem";
import Container from "@material-ui/core/Container";
import "./Favorites.css";

const Favorites = props => {
  const { favList } = props;
  return (
    <Container maxWidth="lg">
      <div className="fav-content">
        <p className="fav-title">
          {favList.length === 0 ? "You have no favorites" : "Your favorites:"}
        </p>
        <div className="fav-container">
          {favList.map((city, index) => {
            return (
              <div key={index}>
                <FavItem
                  name={city.name}
                  temp={city.temp}
                  condition={city.condition}
                  icon={city.icon}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = state => ({
  favList: state.favoritesList
});

export default connect(mapStateToProps)(Favorites);
