import axios from "axios";

const flickrAPI =
  "https://cors-escape.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true";

function fetchPhotos() {
  return axios.get(flickrAPI);
}

export { fetchPhotos };
