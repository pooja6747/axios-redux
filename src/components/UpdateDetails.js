import { PostApiAction, UpdateApiAction } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GetDetailByHook from "../hooks/getDetailByHook";
import { Link } from "react-router-dom";

const UpdateDetails = () => {
  const { id } = useParams();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  // const isUpdateResponse = useSelector(
  //   (state) => state.reducer.isUpdateResponse
  // );

  const [detailsById] = GetDetailByHook(id);

  const formHandle = (e) => {
    e.preventDefault();
    const finalData = {
      email: email,
      username: username,
    };
   
    dispatch(UpdateApiAction(finalData, id));
  };

  useEffect(() => {
    const data = () => {
      if (detailsById.data) {
        setEmail(detailsById.data.email);
        setUsername(detailsById.data.username);
      }
    };
    data();
  });

  return (
    <div className="container">
      <h1>Update Data Form</h1>

      <input
        type="email"
        className="form-control"
        placeholder="email"
        defaultValue={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        className="form-control"
        placeholder="userName"
        defaultValue={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <button className="btn btn-primary" onClick={formHandle}>Update Data</button>

      <br />
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back to home</button>
      </Link>
    </div>
  );
};

export default UpdateDetails;
