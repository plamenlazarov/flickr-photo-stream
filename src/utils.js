import axios from "axios";

const flickrAPI =
  "https://cors-escape.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true/";

function fetchPhotos(param = '') {
  return axios.get(flickrAPI + param).catch(error => {
    console.log(error);
    throw error;
  });
}

export { fetchPhotos };
