import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { inputError } from "../../store/actions";
import searchItemAction from "../../store/actions";
import fetchApiAction from "../../services/fetchApi";

import "./Nav.css";
import { TextField } from "@material-ui/core/";

class Nav extends Component {
  componentDidMount() {
    const { fetchApi, searchTerm } = this.props;
    fetchApi(searchTerm);
  }

  onChange = e => {
    const { searchItem } = this.props;
    const input = e.target.value;
    searchItem(input);
  };

  isInputValid = e => {
    const { inputError } = this.props;
    const re = /[a-zA-Z ]+/g;
    if (!re.test(e.key)) {
      inputError("Please use English letters only");
      e.preventDefault();
    } else {
      inputError(" ");
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const { fetchApi, searchTerm } = this.props;
    fetchApi(searchTerm);
    document.getElementById("search-form").reset();
  };

  render() {
    const { error } = this.props;
    return (
      <div id="top" className="navbar">
        <div className="left">
          <form onSubmit={this.onSubmit} id="search-form">
            <TextField
              onChange={this.onChange}
              onKeyDown={this.isInputValid}
              label="Enter a city name..."
              type="search"
              margin="normal"
              helperText={error}
            />
          </form>
        </div>
        <div className="right">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/favorites">
            Favorites
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  error: state.errors.inputError
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchApi: fetchApiAction,
      searchItem: searchItemAction,
      inputError: inputError
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
