import { useState } from "react";
import { useInventory } from "../../context/InventoryContext";
import "./addNew.css";
export const AddNew = () => {
  const {
    state: { inventoryData },
    dispatch
  } = useInventory();
  const [formData, setFormData] = useState({
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    const newItem = { ...formData, id: Date.now() }; // Using timestamp as a simple unique ID

    // Save to local storage
    const updatedInventoryData = [...inventoryData, newItem];
    localStorage.setItem("inventoryData", JSON.stringify(updatedInventoryData));
    dispatch({ type: "ADD_ITEM", payload: newItem });
    setFormData({
      department: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      sku: "",
      supplier: "",
      delivered: 0,
      imageUrl: ""
    });
  };
  return (
    <div className="addNEwContainer">
      <form onSubmit={handleSubmit}>
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
          <option value="Kitchen">Kitchen</option>
        </select>

        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
        />
        <input
          name="sku"
          placeholder="SKU"
          value={formData.sku}
          onChange={handleChange}
        />
        <input
          name="supplier"
          placeholder="Supplier"
          value={formData.supplier}
          onChange={handleChange}
        />
        <input
          type="number"
          name="delivered"
          placeholder="Delivered"
          value={formData.delivered}
          onChange={handleChange}
        />
        <input
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
        />

        <button type="submit" onClick={() => handleSubmit}>
          Add New
        </button>
      </form>
    </div>
  );
};
