import React from "react";
import Caption from "../Caption/Caption";
import Description from "../Description/Description";
import './style.scss';

const PhotoTile = ({ photo, onClick }) => {
  const { title, link, author, author_id, media, description } = photo;
  // Handle cases where title is a whitespace
  const photoTitle = title.trim() ? title : 'Title';

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
      <Description data={description} />
    </li>
  );
};

export default PhotoTile;
