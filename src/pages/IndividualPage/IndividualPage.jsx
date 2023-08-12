import "./indivisualPage.css";
import { useParams } from "react-router-dom";
import { useInventory } from "../../context/InventoryContext";
export const IndividualPage = () => {
  const { id } = useParams();

  const {
    state: { inventoryData }
  } = useInventory();
  const getParticularData = inventoryData.find(
    (item) => Number(item.id) === Number(id)
  );

  return (
    <div className="individualContainer">
      <div className="individualBox">
        <div className="image">
          <img src={getParticularData.imageUrl} alt="girlsimage" />
        </div>
        <div className="details">
          <div className="name">{getParticularData.name}</div>
          <div className="item">Price:{getParticularData.price}</div>
          <div className="item">Stock:{getParticularData.stock}</div>
          <div className="item">Supplier:{getParticularData.supplier}</div>
          <div className="item">
            Description:{getParticularData.description}
          </div>
          <div className="item">SKU:{getParticularData.sku}</div>
          <div className="item">Delivered:{getParticularData.delivered}</div>
          <div className="item">Department:{getParticularData.department}</div>
        </div>
      </div>
    </div>
  );
};
