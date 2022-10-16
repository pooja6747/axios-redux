import "./App.css";
import Home from "./components/Home";
import Forms from "./components/Forms";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import UpdateDetails from "./components/UpdateDetails";
import Error from "./components/Error";

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
       
        <Routes>

<Route path='/' element={<Home/>}/>

<Route path='about' element={<Forms/>}/>
<Route path='update/:id' element={<UpdateDetails/>}/>
<Route path='*' element={<Error/>}/>
 </Routes>
       
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
