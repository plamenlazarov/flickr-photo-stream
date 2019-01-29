import React from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import "./style.scss";

interface DescriptionProps {
  data: string
}

const Description: React.SFC<DescriptionProps> = (props) => {
  // Ensure we are safe from XSS attacks
  const sanitizedHTML = DOMPurify.sanitize(props.data);

  return (
    <div
      className="description-full"
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
};

export default Description;
