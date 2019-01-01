import React from "react";

const PresentationContent = ({ content, name }) => {
  return (
    <span className={`presentation__item presentation__item--${name}`}>
      {content}
    </span>
  );
};

export default PresentationContent;
