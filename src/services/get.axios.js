import axios from "axios";

export const getAPI = (endpoint) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .get(endpoint)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

  return promise;
};
