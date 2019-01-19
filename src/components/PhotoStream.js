import React, { Component } from "react";
import axios from "axios";
import PhotoTile from "./PhotoTile";
import { fetchPhotos } from "./../utils";

class PhotoStream extends Component {
  state = {
    photos: [],
    isLoading: true
  };

  componentDidMount() {
    fetchPhotos().then(resp =>
      this.setState({ photos: resp.data.items, isLoading: false })
    );

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom =
      Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom) {
      this.photoSearchResult();
    }
  };

  photoSearchResult = () => {
    if (this.state.isLoading) {
      return;
    }

    fetchPhotos().then(resp => {
      const photos = this.state.photos.concat(resp.data.items);

      this.setState({ photos: photos, isLoading: false });
    });

    this.setState({ isLoading: true });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.photos.map((photo, idx) => (
            <PhotoTile photo={photo} key={photo.author_id + idx} />
          ))}
        </ul>
        {this.state.isLoading ? <div className="loader" /> : <div />}
      </div>
    );
  }
}

export default PhotoStream;
