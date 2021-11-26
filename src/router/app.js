import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../view/Login.jsx'
import Register from '../view/Register.jsx'

function app (){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route  path="Register/" element={<Register />} />
        </Routes>
      </BrowserRouter>
    )
}

export default app;
