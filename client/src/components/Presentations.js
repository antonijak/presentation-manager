import React from "react";
import PresentationItem from "./PresentationItem/PresentationItem";
import "./Presentations.scss";

const Presentations = ({
  presentations,
  editNewPresentation,
  handleDelete,
  history
}) => {
  const presentationsList =
    presentations.length !== 0 ? (
      presentations.map((presentation, i) => {
        return (
          <PresentationItem
            presentation={presentation}
            variant="item"
            key={i + "-item"}
            editNewPresentation={editNewPresentation}
            handleDelete={handleDelete}
            history={history}
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
          presentation={{
            presenter: "Presenter",
            evaluator: "Evaluator",
            topic: "Topic",
            date: "Date"
          }}
        />
        {presentationsList}
      </ul>
    </div>
  );
};

export default Presentations;
