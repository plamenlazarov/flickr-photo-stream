import React from "react";
import DOMPurify from "dompurify";

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
    desc = "<p>No description provided</p>";
  }

  if (showDetails) {
    return (
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
      />
    );
  }

  return (
    <div className="description" dangerouslySetInnerHTML={{ __html: desc }} />
  );
};

export default Description;
