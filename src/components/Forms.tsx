import { PostApiAction } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RootState } from "../redux/reducer/rootReducer";
import { useAppDispatch } from "../redux/store";

const Forms = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useAppDispatch();
  const isResponse = useSelector((state:RootState) => state.reducer.isResponse);

  const formHandle = async(e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const finalData = {
      id: id,
      email: email,
      username: username,
    };

  dispatch(PostApiAction(finalData));
  };

     if(isResponse == true){
      alert("Your response has been submitted");
     }

  return (
    <div className="container">
      <h1>Create Data Form</h1>
      <div className="mb-3">
        <label  className="form-label">
          ID
        </label>
        <input
          placeholder="Id"
          type="number"
          className="form-control"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Email address
        </label>
        <input
          type="email"
          placeholder="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label  className="form-label">
          Username
        </label>
        <input
          type="text"
          placeholder="userName"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={formHandle}>
        ADD Data
      </button>
      <br />
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back to home</button>
      </Link>
    </div>
  );
};

export default Forms;
