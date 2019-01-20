import React from "react";
import DOMPurify from "dompurify";
import './style.scss';

//if using propTypes - showDetails must not be mandatory
const Description = ({ data, showDetails }) => {
  // Ensure we are safe from XSS attacks
  const sanitizedHTML = DOMPurify.sanitize(data);
  const wrapper = document.createElement("div");
  wrapper.innerHTML = sanitizedHTML;

  let desc;
  if (wrapper.childElementCount > 2) {
    desc = wrapper.lastChild.outerHTML;
  } else {
    desc = "<p>Description</p>";
  }

  if (showDetails) {
    return (
      <div
        className="description-full"
        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
      />
    );
  }

  return (
    <div className="description-summary" dangerouslySetInnerHTML={{ __html: desc }} />
  );
};

export default Description;
