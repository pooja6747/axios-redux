import { useEffect, useState } from "react";
import { GetDetailsById } from "../api/axiosRequest";

export default (props) => {
  const [detailsById, setDetailsById] = useState({});

  const GetDetailByHook = (requestId) => {
    console.log("request", requestId);
    return GetDetailsById(requestId).then((res) => {
      console.log(res);
      setDetailsById(res);
    });
  };

  useEffect(() => {
    GetDetailByHook(props);
  }, [props]);

  return [detailsById];
};
