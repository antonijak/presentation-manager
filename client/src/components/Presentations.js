import React from "react";
import PresentationsItem from "./PresentationsItem";
import "./Presentations.scss";

const Presentations = ({
  presentations,
  editNewPresentation,
  handleDelete,
  history
}) => (
  <div className="container presentations-container">
    <ul className="list-group list-group-flush presentation-list">
      <li className="list-group-item headings">
        <div className="presentation bold-text">
          <h6 className="presentation__item presenter">Presenter</h6>
          <h6 className="presentation__item evaluator">Evaluator</h6>
          <h6 className="presentation__item topic">Topic</h6>
          <h6 className="presentation__item date">Date</h6>
          <h6 className="presentation__item article">Article</h6>
          <h6 className="presentation__item modify">Modify</h6>
        </div>
      </li>
      {presentations ? (
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
          <span className="spinner-border mt-4" role="status" />
        </div>
      )}
    </ul>
  </div>
);

export default Presentations;
