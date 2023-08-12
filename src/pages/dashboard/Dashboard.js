import { useInventory } from "../../context/InventoryContext";
import "./dashboard.css";
export const Dashboard = () => {
  const {
    state: { inventoryData }
  } = useInventory();
  const totalStock = inventoryData.reduce((a, b) => a + Number(b.stock), 0);
  const totalDelivered = inventoryData.reduce(
    (a, b) => a + Number(b.delivered),
    0
  );
  const lowStockItems = inventoryData.reduce(
    (a, b) => a + Number(b.stock <= 10),
    0
  );

  const data = [
    { label: "Total Stock", value: totalStock },
    { label: "Total Delivered", value: totalDelivered },
    { label: "Low Stock Items", value: lowStockItems }
  ];
  return (
    <div className="dashboardContainer">
      {data.map((item) => (
        <div key={item} className="boxes">
          <div className="box">
            <div className="number">{item.value}</div>

            <div className="text">{item.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
