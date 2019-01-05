import React from "react";
import { Link } from "react-router-dom";

const Buttons = ({
  presentation,
  className,
  history,
  editNewPresentation,
  handleDelete
}) => {
  return (
    <div className={className}>
      <Link
        to={"/presentations/edit/" + presentation._id}
        className="btn btn-primary btn-lg"
        tabIndex="-1"
        role="button"
      >
        Edit
      </Link>

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
