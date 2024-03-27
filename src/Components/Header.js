import { LOGO_URL } from "../Utils/constants";

const Header=()=>
{
  return(<div className="header">
    <div className="logo">
      <img src={LOGO_URL} alt="" />
    </div>
    <div className="nav-item">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>)
}
export default Header;