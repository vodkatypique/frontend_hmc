import axios from "axios";

export default axios.create({
  baseURL: "https://vodkatypique.pythonanywhere.com/api",
  headers: {
    "Content-type": "application/json",
    //"Access-Control-Allow-Origin" : "*",
  }
});