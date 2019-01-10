import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = ({ heading, paragraph }) => {
  return (
    <div className="jumbotron jumbotron-fluid mt-5">
      <div className="container">
        <h2 className="display-4">{heading}</h2>
        <p className="lead">{paragraph}</p>
        <div className="input-group">
          <Link
            to="/presentations"
            className="btn btn-outline-secondary btn-lg mr-2"
            role="button"
          >
            Presentations
          </Link>

          <Link
            to="/presentations/add-new"
            className="btn btn-outline-primary btn-lg"
            role="button"
          >
            Add New
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
