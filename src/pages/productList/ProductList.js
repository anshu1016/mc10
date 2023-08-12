import { useEffect, useState } from "react";
import { useInventory } from "../../context/InventoryContext";
import "./productList.css";
import { NavLink, useParams, useNavigate } from "react-router-dom";
export const ProductList = () => {
  const navigate = useNavigate();
  const {
    state: { inventoryData, temporaryData },
    dispatch
  } = useInventory();
  const [category, setCategory] = useState("products");
  const { categoryFromURL } = useParams();

  useEffect(() => {
    if (categoryFromURL) {
      setCategory(categoryFromURL);
      dispatch({ type: "FILTER_CATEGORY", payload: categoryFromURL });
    } else {
      setCategory("products");
    }
  }, [categoryFromURL, dispatch]);
  const [filterType, setFilterType] = useState("");
  const [checked, setChecked] = useState(false);
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    console.log(selectedCategory, "category");
    if (selectedCategory === "products") {
      dispatch({ type: "RESET_DATA", payload: selectedCategory });
    } else {
      dispatch({ type: "FILTER_CATEGORY", payload: selectedCategory });
    }
  };
  const handleCheckBoxChange = (e) => {
    const changeTheChecked = e.target.checked;
    setChecked(changeTheChecked);
    console.log(changeTheChecked, "checkedddd");
    changeTheChecked
      ? dispatch({ type: "FILTER_CHECKED", payload: changeTheChecked })
      : dispatch({ type: "RESET_FILTER", payload: changeTheChecked });
  };
  const handleFilterType = (e) => {
    const nameOfFilter = e.target.value;
    setFilterType(nameOfFilter);
    console.log(nameOfFilter, "nameOFFIlter");
    dispatch({ type: "SORT_DATA", payload: nameOfFilter });
  };

  return (
    <div className="productListContainer">
      <div className="functionss">
        <div className="logo">Product</div>
        <div className="productCategory">
          <select value={category} onChange={(e) => handleCategoryChange(e)}>
            <option value="products">All Products</option>
            <option value="kitchen">Kitchen</option>
            <option value="toys">Toys</option>
            <option value="clothing">Clothing</option>
          </select>
        </div>
        <div className="lowStockItem">
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleCheckBoxChange(e)}
              value={checked}
            />
            Low Stock Items
          </label>
        </div>
        <div className="priceCategory">
          <select onChange={(e) => handleFilterType(e)} value={filterType}>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="stock">Stock</option>
          </select>
        </div>
        <div className="buttons">
          <button onClick={() => navigate("/add-new-item")}>New</button>
        </div>
      </div>
      <div className="productTable"></div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {temporaryData.map((item) => (
            <tr key={item.id}>
              <NavLink to={`/product/${item.id}`}>
                <td>
                  <img src={item?.imageUrl} alt={item?.name} width="50" />
                </td>
                <td>{item?.name}</td>
                <td>{item?.description}</td>
                <td>${item?.price}</td>
                <td>{item?.stock}</td>
                <td>{item?.supplier}</td>
              </NavLink>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
