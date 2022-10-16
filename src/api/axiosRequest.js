import axios from "axios";

export async function AxiosRequest(url, method, headers, params) {
  return params
    ? axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
      })
    : axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
      });
}

const GetApiDetails = () => {
  const headers = {
    "Content-type": "application/json",
  };
  return AxiosRequest("https://fakestoreapi.com/users", "GET", headers, {});
};

const PostApiDetails = (data) => {
  const headers = {
    "Content-type": "application/json",
  };
  return AxiosRequest("https://fakestoreapi.com/users", "POST", headers, data);
};

const GetDetailsById = (id) => {
  const headers = {
    "Content-type": "application/json",
  };
  return AxiosRequest(
    "https://fakestoreapi.com/users/" + id,
    "GET",
    headers,
    {}
  );
};

const UpdateApiDetails = (data, id) => {
  const headers = {
    "Content-type": "application/json",
  };
  return AxiosRequest(
    "https://fakestoreapi.com/users/"+id,
    "PUT",
    headers,
    data
  );
};

const DeleteApiDetails = (id) => {
  const headers = {
    "Content-type": "application/json",
  };
  return AxiosRequest(
    "https://fakestoreapi.com/users/" + id,
    "DELETE",
    headers,
    {}
  );
};

export {
  GetApiDetails,
  PostApiDetails,
  GetDetailsById,
  UpdateApiDetails,
  DeleteApiDetails,
};
