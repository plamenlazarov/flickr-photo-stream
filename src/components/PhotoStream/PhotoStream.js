import React, { Component } from "react";
import axios from "axios";
import PhotoTile from "../PhotoTile/PhotoTile";
import Description from "../Description/Description";
import Modal from "../Modal/Modal";
import { fetchPhotos } from "./../../utils";
import './style.scss';

class PhotoStream extends Component {
  state = {
    photos: [],
    isLoading: true,
    showDetails: true,
    showModal: false,
    description: null
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

  handleModal = (description) => {
    this.setState({
      showModal: !this.state.showModal,
      description: description
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.photos.map((
            photo,
            idx
          ) => (
            <PhotoTile photo={photo} onClick={() => this.handleModal(photo.description)} key={photo.author_id + idx} />
          ))}
        </ul>
        {this.state.isLoading ? <div className="loader" /> : <div />}
      {this.state.showModal ?
          <Modal>
            <button onClick={() => this.handleModal(null)}>Close</button>
            <Description data={this.state.description} showDetails={this.state.showDetails} />
          </Modal>
          : null}
      </div>
    );
  }
}

export default PhotoStream;
