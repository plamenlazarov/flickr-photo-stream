import React from "react";
import Caption from "../Caption/Caption";
import "./style.scss";

interface PhotoTileProps {
  photo: {
    title: string,
    link: string,
    author: string,
    author_id: string,
    media: {
      m: string
    },
    tags: string
  },
  onClick: () => void
}

const PhotoTile: React.SFC<PhotoTileProps> = (props) => {
  const { title, link, author, author_id, media, tags } = props.photo;
  // Handle cases where title is a whitespace
  const photoTitle = title.trim() ? title : "Title";

  return (
    <li>
      <div className="photo-container">
        <img
          onClick={props.onClick}
          className="photo-image"
          src={media.m}
          alt="flickr photo"
        />
      </div>
      <Caption
        link={link}
        title={photoTitle}
        author_id={author_id}
        author={author}
      />
      <p onClick={props.onClick}>See more...</p>
      <div className="tags">{tags}</div>
    </li>
  );
};

export default PhotoTile;
