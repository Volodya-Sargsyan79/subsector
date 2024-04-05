import axios from "axios";

const request = async (
  method,
  url,
  data = undefined,
  headers = null,
) => {
  if (headers) {
    Object.keys(headers).map((key) => {
      axios.defaults.headers[method][key] = headers[key];
    });
  } else {
    axios.defaults.headers[method]["Content-Type"] =
      "application/x-www-form-urlencoded; application/json";
    axios.defaults.headers[method]["Content-Type"] = "application/json";
  }
  axios.defaults.headers[method][
    "Authorization"
  ] = `Bearer ${localStorage.getItem("vsl-token")}`;
  axios.defaults.headers[method]["ngrok-skip-browser-warning"] = "true";
  axios.defaults.headers[method]["Access-Control-Allow-Origin"] = "*";
  try {
    const res = await axios[method](url, data);
    return res;
  } catch (error) {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem("refresh-token")
      if (refreshToken) {
       const response = await axios['post']('/auth/refresh-token', {refreshToken})
       localStorage.setItem("vsl-token", response.data.accessToken);
       localStorage.setItem("refresh-token", response.data.refreshToken);
        request(method, url, data, headers).then(window.location.reload())
      }
    }

    const failureData = error;
    return failureData;
  
  }
};

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
