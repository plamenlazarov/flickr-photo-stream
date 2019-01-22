import React from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import "./style.scss";

const Description = ({ data }) => {
  // Ensure we are safe from XSS attacks
  const sanitizedHTML = DOMPurify.sanitize(data);

  return (
    <div
      className="description-full"
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
};

Description.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Description;
