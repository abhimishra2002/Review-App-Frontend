import axios from "axios";

//Using axios library for http request to the api

//Creating a cliet with a base URL
const client = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default client;
