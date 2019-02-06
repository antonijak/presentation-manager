import React from "react";
import PresentationsItem from "./PresentationsItem/PresentationsItem";
import "./Presentations.scss";

const Presentations = ({
  presentations,
  editNewPresentation,
  handleDelete,
  history
}) => {
  const presentationsList = presentations ? (
    presentations
      .sort((a, b) => a.date.localeCompare(b.date))
      .map((presentation, i) => (
        <PresentationsItem
          presentation={presentation}
          variant="item"
          key={i + "-item"}
          editNewPresentation={editNewPresentation}
          handleDelete={handleDelete}
          history={history}
        />
      ))
  ) : (
    <div className="container" id="spinner-parent">
      <div className="spinner-border mt-4" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  return (
    <div className="container presentations-container">
      <ul className="list-group list-group-flush presentation-list">
        <li className="list-group-item bold-text">
          <div className="presentation">
            <span className="presentation__item presenter">Presenter</span>
            <span className="presentation__item evaluator">Evaluator</span>
            <span className="presentation__item topic">Topic</span>
            <span className="presentation__item date">Date</span>
            <span className="presentation__item article">Article</span>
            <span className="presentation__item modify">Modify</span>
          </div>
        </li>
        {presentationsList}
      </ul>
    </div>
  );
};

export default Presentations;
