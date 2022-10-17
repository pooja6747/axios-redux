import { useEffect, useState } from "react";
import { GetDetailsById } from "../api/axiosRequest";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: any) => {
  const [detailsById, setDetailsById] = useState({});

  const GetDetailByHook = (requestId: string) => {
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
