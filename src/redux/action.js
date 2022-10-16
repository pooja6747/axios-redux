import {
  GET_DETAILS,
  UPDATE_DETAILS,
  POST_DETAILS,
  DELETE_DETAILS,
} from "./type";
import {
  DeleteApiDetails,
  GetApiDetails,
  PostApiDetails,
  UpdateApiDetails,
} from "../api/axiosRequest";

const GetApiAction = () => {
  return function (dispatch) {
    return GetApiDetails().then((response) => {
      dispatch({
        type: "GET_DETAILS",
        payload: response.data,
      });
    });
  };
};

const PostApiAction = (request) => {
  return function (dispatch) {
    return PostApiDetails(request).then((response) => {
      console.log(response);

      dispatch({
        type: "POST_DETAILS",
        payload: "",
      });
    });
  };
};

const UpdateApiAction = (request, id) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_DETAILS,
      payload: false,
    });
    return UpdateApiDetails(request,id).then((response) => {
      console.log(response);

      dispatch({
        type: "UPDATE_DETAILS",
        payload: true,
      });
    });
  };
};

const DeleteApiAction = (id) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_DETAILS,
      payload: false,
    });
    return DeleteApiDetails(id).then((response) => {
      console.log(response);

      dispatch({
        type: "DELETE_DETAILS",
        payload: true,
      });
    });
  };
};

export { GetApiAction, PostApiAction, UpdateApiAction, DeleteApiAction };
