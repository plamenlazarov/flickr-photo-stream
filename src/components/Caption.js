import React from "react";

const Caption = ({ link, title, author, author_id }) => (
  <div className="">
    <h4 className="caption photo-title">
      <a href={link}>{title}</a>
    </h4>
    by
    <h4 className="caption author">
      <a href={"https://www.flickr.com/people/" + author_id}>
        {author.split('"')[1]}
      </a>
    </h4>
  </div>
);

export default Caption;
