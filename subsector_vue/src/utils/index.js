import axios from "axios";

axios.defaults.baseURL =
  typeof window.baseUrl !== "undefined"
    ? window.baseUrl
    : "https://sector-rick2.azurewebsites.net";

const get = async (url, data = null, headers = null) => {
  return request("get", url, data, headers);
};

const put = async (url, data, headers = null) =>
  request("put", url, data, headers);

const post = async (url, data, headers = null) =>
  request("post", url, data, headers);

const del = async (url, data, headers = null) =>
  request("delete", url, data, headers);

const patch = async (url, data, headers = null) =>
  request("patch", url, data, headers);

export { get, put, post, del, patch };
