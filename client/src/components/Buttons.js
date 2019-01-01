import React from "react";
import { Link } from "react-router-dom";

const Buttons = ({ _id, className }) => {
  return (
    <div className={className}>
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
