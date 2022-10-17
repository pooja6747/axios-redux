import { useDispatch, useSelector } from "react-redux";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect } from "react";
import { GetApiAction, DeleteApiAction } from "../redux/action";
import { Link } from "react-router-dom";
import { RootState } from "../redux/reducer/rootReducer";
import { useAppDispatch } from "../redux/store";

const Home = () => {
  const dispatch = useAppDispatch();
  const responseData = useSelector((state:RootState) => state.reducer.details);
  const isDeleteResponse = useSelector(
    (state:RootState) => state.reducer.isDeleteResponse
  );

  useEffect(() => {
    dispatch(GetApiAction());
  }, [dispatch]);

  if (isDeleteResponse) {
    alert("data has been deleted");
    window.location.reload(false);
  }

  return (
    <>
      <div className="container">
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="row">ID</th>
              <th>Email</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {responseData
            ? responseData.map((person: { id: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | null | undefined; email: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; username: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: Key | null | undefined) => {
                return (
                  <tr key={index}>
                    <td>{person.id}</td>
                    <td>{person.email}</td>
                    <td>{person.username}</td>
                    <td>
                      <Link to={`/update/${person.id}`}>
                        <button className="btn btn-primary" style={{marginRight:'15px'}}>Edit</button>
                      </Link>
                      <button
                        className="btn btn-danger" 
                        onClick={() => dispatch(DeleteApiAction(person.id))}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : null}
          </tbody>
         
        
          <Link to="/about">
            <button className="btn btn-primary" style={{marginTop:"50px",marginLeft:"20px"}}>Create User</button>
          </Link>
        </table>
      </div>
    </>
  );
};

export default Home;
