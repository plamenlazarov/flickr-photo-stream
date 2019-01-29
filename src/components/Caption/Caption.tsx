import React from "react";
import "./style.scss";

interface CaptionProps {
  link: string,
  title: string,
  author: string,
  author_id: string
}

const Caption: React.SFC<CaptionProps> = (props) => {
  const creator = props.author.split('"')[1];

  return (
    <div className="caption-wrapper">
      <h4 className="caption photo-title">
        <a href={props.link} title={props.title}>
          {props.title}
        </a>
      </h4>
      <h4 className="caption author">
        by{" "}
        <a href={"https://www.flickr.com/people/" + props.author_id} title={creator}>
          {creator}
        </a>
      </h4>
    </div>
  );
};

export default Caption;
