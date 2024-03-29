import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";

const Header=()=>
{
  const[btn,setbtn]=useState("Login");

  return(<div className="header">
    <div className="logo">
      <img src={LOGO_URL} alt="" />
    </div>
    <div className="nav-item">
      <ul>
        <li>Home🏠</li>
        <li>About us</li>
        <li>Contact us☎️</li>
        <li>Cart🛒</li>
        <button className="login" onClick={()=>{
          btn==="Login"?
          setbtn("Logout"):setbtn("Login");
        }}>{btn}</button>
      </ul>
    </div>
  </div>)
}
export default Header;