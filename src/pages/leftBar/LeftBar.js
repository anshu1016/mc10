import "./leftbar.css";
import { NavLink } from "react-router-dom";
export const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="leftItems">
        <div className="item">
          <NavLink to="/">
            <p>DashBoard</p>
          </NavLink>
        </div>
        <div className="item">
          <NavLink to="/department">
            <p>Department</p>
          </NavLink>
        </div>
        <div className="item">
          <NavLink to="/products">
            <p>Products</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
