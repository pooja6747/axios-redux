import { type } from "os";
import {
  DELETE_DETAILS,
  GET_DETAILS,
  POST_DETAILS,
  UPDATE_DETAILS,
} from "../type";

type InitialState = {
  details: [],
  detailsById: [],
  isResponse: boolean,
  isUpdateResponse: boolean,
  isDeleteResponse: boolean,
  newChanges : boolean
}

const initialState:InitialState = {
  details: [],
  detailsById: [],
  isResponse: false,
  isUpdateResponse: false,
  isDeleteResponse: false,
  newChanges : false
};

const Reducer = (state ={}= initialState, action: any) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        details: action.payload,
      };
    case POST_DETAILS:
      return {
        isResponse: true,
      };
    case UPDATE_DETAILS:
      return {
        isUpdateResponse: action.payload,
      };
    case DELETE_DETAILS:
      return {
        isDeleteResponse: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
