import React from "react";
import PresentationItem from "./PresentationItem/PresentationItem";
import "./Presentations.scss";

const Presentations = props => {
  const presentationsList =
    props.presentations.length !== 0 ? (
      props.presentations.map((presentation, i) => {
        return (
          <PresentationItem
            _id={presentation._id}
            presenter={presentation.presenter}
            evaluator={presentation.evaluator}
            topic={presentation.topic}
            date={presentation.date}
            article={presentation.article_url}
            variant="item"
            key={i + "-item"}
          />
        );
      })
    ) : (
      <div className="container" id="spinner-parent">
        <div className="spinner-border mt-4" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  return (
    <div className="container mt-5">
      <ul className="list-group list-group-flush ">
        <PresentationItem
          presenter="Presenter"
          evaluator="Evaluator"
          topic="Topic"
          date="Date"
        />
        {presentationsList}
      </ul>
    </div>
  );
};

export default Presentations;
