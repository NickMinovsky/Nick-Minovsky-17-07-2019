import React, { Component } from "react";
import { connect } from "react-redux";
import "aos/dist/aos.css";

import Today from "./Today/Today";
import Table from "./Table/Table";
import Loader from "../../containers/Loader/Loader";
import Container from "@material-ui/core/Container";

class Home extends Component {
  state = {};
  render() {
    const { pending } = this.props;
    return (
      <Container maxWidth="xl" className="main-container">
        {!pending ? (
          <div className="god-container">
            <div className="test">
              <Today />
            </div>{" "}
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-offest="500"
              data-aos-easing="ease-in-back"
            >
              <Table />{" "}
            </div>
          </div>
        ) : (
          <div>
            <Loader />
          </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  pending: state.apiData.pending
});

export default connect(mapStateToProps)(Home);
