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
import { useDispatch } from "react-redux";
import { useAppDispatch } from "./store";

const dispatch = useDispatch;

const GetApiAction = () => {
  return function () {
    return GetApiDetails().then((response) => {
      dispatch({
        type: "GET_DETAILS",
        payload: response.data,
      });
    });
  };
};

const PostApiAction = (request: { id?: string; email?: string; username?: string; }) => {
  return function (dispatch: (arg0: { type: string; payload: string; }) => void) {
    return PostApiDetails(request).then((response) => {
      console.log(response);

      dispatch({
        type: "POST_DETAILS",
        payload: "",
      });
    });
  };
};

const UpdateApiAction = (request: { email?: string; username?: string; }, id: any) => {
  return function (dispatch: (arg0: { type: string; payload: boolean; }) => void) {
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

const DeleteApiAction = (id: string) => {
  return function (dispatch: (arg0: { type: string; payload: boolean; }) => void) {
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
