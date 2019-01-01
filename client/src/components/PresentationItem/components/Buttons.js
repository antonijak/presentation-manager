import React from "react";
import { Link } from "react-router-dom";

const Buttons = ({ _id }) => {
  return (
    <div className="presentation__item presentation__item--buttons">
      <Link
        to={`/presentations/edit/${_id}`}
        className="btn btn-primary edit"
        role="button"
      >
        Edit
      </Link>
      <button type="button" className="btn btn-danger delete">
        Delete
      </button>
    </div>
  );
};

export default Buttons;
