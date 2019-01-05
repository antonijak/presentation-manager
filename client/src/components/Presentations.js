import React from "react";
import PresentationItem from "./PresentationItem/PresentationItem";
import "./Presentations.scss";

const Presentations = ({
  presentations,
  editNewPresentation,
  handleDelete,
  history
}) => {
  console.log("presentations", presentations);

  const presentationsList =
    presentations.length > 0 ? (
      presentations
        .sort((a, b) => a.date.localeCompare(b.date))
        .map((presentation, i) => (
          <PresentationItem
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
        <PresentationItem
          presentation={{
            presenter: "PRESENTER",
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
