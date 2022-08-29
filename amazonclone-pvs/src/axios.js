import axios from "axios";

const instance = axios.create({
  //The API (cloud functions) URL
  baseURL: "https://us-central1-clone-pvs.cloudfunctions.net/api",
  //used this to test for local baseURL "http://localhost:5001/clone-pvs/us-central1/api"
});

export default instance;


