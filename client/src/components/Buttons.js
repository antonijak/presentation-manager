import React from "react";

const Buttons = ({ presentation, className, history, editNewPresentation }) => {
  return (
    <div className={className}>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => editNewPresentation(history, presentation)}
      >
        Edit
      </button>

      <button type="button" className="btn btn-danger delete">
        Delete
      </button>
    </div>
  );
};

export default Buttons;
