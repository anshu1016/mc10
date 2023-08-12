import "./department.css";
import { NavLink } from "react-router-dom";
export const Department = () => {
  return (
    <div className="departmentContainer">
      {["Kitchen", "Clothing", "Toys"].map((item) => (
        <div className="boxess">
          <div className="boxx">
            <NavLink to={`/products/${item.toLowerCase()}`}>{item}</NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};
