import { PostApiAction } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const Forms = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const isResponse = useSelector((state) => state.reducer.isResponse);

  const formHandle = (e) => {
    e.preventDefault();
    const finalData = {
      id: id,
      email: email,
      username: username,
    };

    dispatch(PostApiAction(finalData));
  };

  //    if(isResponse == true){
  //     alert("Your response has been submitted");
  //    }

  return (
    <div className="container">
      <h1>Create Data Form</h1>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          ID
        </label>
        <input
          placeholder="Id"
          type="number"
          class="form-control"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          placeholder="email"
          class="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Username
        </label>
        <input
          type="text"
          placeholder="userName"
          class="form-control"
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
