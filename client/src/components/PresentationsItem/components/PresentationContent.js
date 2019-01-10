import React from "react";
import "./PresentationContent.scss";

const PresentationContent = ({ content, name }) => {
  return (
    <span className={`presentation__item presentation__item__${name}`}>
      {content}
    </span>
  );
};

export default PresentationContent;
