import React from "react";
import Caption from "./Caption";
import Description from "./Description";
import Modal from "./Modal";

const PhotoTile = ({ photo, onClick }) => {
  const { title, link, author, author_id, media, description } = photo;

  return (
    <li>
      <div className="photo-container">
        <img
          onClick={onClick}
          className="photo-image"
          src={media.m}
          alt="flickr photo"
        />
      </div>
      <Caption
        link={link}
        title={title}
        author_id={author_id}
        author={author}
      />
    </li>
  );
};

export default PhotoTile;
