import { Route, Routes} from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
// import {Home} from "./pages/Home"
import Cart from "./pages/Cart";
import { Home } from "./pages/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import { OtpVerify } from "./pages/auth/OtpVerify";
import { Resetpass } from "./pages/auth/Resetpass";
import { UpdatePassword } from "./pages/auth/UpdatePassword";
// import { VerifyEmail } from "./pages/auth/VerifyEmail";
// import { VerifyEmail } from "./pages/auth/verifyEmail";

const App = () => {
  return (
    <div>
      <div className=" bg-slate-900">
        <Navbar/>
      </div>

      <Routes>
      {/* <Route path="/" element={<Home/>}/> */}
      <Route  path="/cart" element={<Cart/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
   <Route path="/forgot-password" element={<Resetpass/>}/>
   <Route path="/update-password/:id" element={<UpdatePassword/>}/>

      <Route path ="/otp-verification" element={<OtpVerify/>}/>


      </Routes>
      



    </div>
    
    



  );
};

export default App;
