import React from "react";
import PresentationsItem from "./PresentationsItem/PresentationsItem";
import "./Presentations.scss";

const Presentations = ({
  presentations,
  editNewPresentation,
  handleDelete,
  history
}) => {
  const presentationsList =
    presentations.length > 0 ? (
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
    <div className="container mt-5">
      <ul className="list-group list-group-flush ">
        <PresentationsItem
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
