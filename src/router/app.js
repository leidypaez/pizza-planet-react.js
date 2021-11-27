import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../view/Login.jsx';
import Register from '../view/Register.jsx';
import Home from '../view/Home.jsx';

function app (){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route  path="/Register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    )
}

export default app;
