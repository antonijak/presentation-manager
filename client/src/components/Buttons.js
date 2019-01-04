import React from "react";

const Buttons = ({
  presentation,
  className,
  history,
  editNewPresentation,
  handleDelete
}) => {
  return (
    <div className={className}>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => editNewPresentation(history, presentation)}
      >
        Edit
      </button>

      <button
        type="button"
        className="btn btn-danger delete"
        onClick={() => handleDelete(presentation._id, history)}
      >
        Delete
      </button>
    </div>
  );
};

export default Buttons;
