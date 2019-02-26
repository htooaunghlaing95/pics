import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID ef34e3ba3607df16c24faca1db1afb807d8f49edae9617fe2af6a04ae240ad83"
  }
});
