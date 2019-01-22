import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Caption = ({ link, title, author, author_id }) => {
  const creator = author.split('"')[1];

  return (
    <div className="caption-wrapper">
      <h4 className="caption photo-title">
        <a href={link} title={title}>
          {title}
        </a>
      </h4>
      <h4 className="caption author">
        by{" "}
        <a href={"https://www.flickr.com/people/" + author_id} title={creator}>
          {creator}
        </a>
      </h4>
    </div>
  );
};

Caption.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  author_id: PropTypes.string.isRequired
};

export default Caption;
