import React from "react";
import PropTypes from "prop-types";
import Caption from "../Caption/Caption";
import "./style.scss";

const PhotoTile = ({ photo, onClick }) => {
  const { title, link, author, author_id, media, tags } = photo;
  // Handle cases where title is a whitespace
  const photoTitle = title.trim() ? title : "Title";

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
        title={photoTitle}
        author_id={author_id}
        author={author}
      />
      <p onClick={onClick}>See more...</p>
      <div className="tags">{tags}</div>
    </li>
  );
};

PhotoTile.propTypes = {
  photo: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PhotoTile;
