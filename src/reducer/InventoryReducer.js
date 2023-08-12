import { InventoryData } from "../db/InventoryData";
const savedInventoryData = JSON.parse(localStorage.getItem("inventoryData"));
export const initialState = {
  inventoryData: savedInventoryData || InventoryData,
  temporaryData: savedInventoryData || InventoryData,
  totalStock: "",
  totalDelivered: "",
  lowStockItem: "",
  category: "products"
};
export const InventoryReducer = (state, { type, payload }) => {
  switch (type) {
    case "FILTER_CATEGORY":
      const filteredCategory = state.inventoryData.filter(
        (item) => item.department.toLowerCase() === payload.toLowerCase()
      );
      return {
        ...state,
        temporaryData:
          payload === "products" ? state.inventoryData : filteredCategory
      };
    case "FILTER_CHECKED":
      const filterChecked = state.inventoryData.filter(
        (item) => item.stock <= 10
      );
      return { ...state, temporaryData: filterChecked };
    case "RESET_FILTER":
      if (state.category === "products") {
        return { ...state, temporaryData: state.inventoryData };
      } else {
        const filteredCategory = state.inventoryData.filter(
          (item) =>
            item.department.toLowerCase() === state.category.toLowerCase()
        );
        return { ...state, temporaryData: filteredCategory };
      }
    case "SORT_DATA":
      let sortedData = [...state.temporaryData];
      switch (payload) {
        case "name":
          sortedData.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "price":
          sortedData.sort((a, b) => a.price - b.price);
          break;
        case "stock":
          sortedData.sort((a, b) => a.stock - b.stock);
          break;
        default:
          break;
      }
      return {
        ...state,
        temporaryData: sortedData
      };
    case "ADD_ITEM":
      const updatedData = [...state.inventoryData, payload];
      localStorage.setItem("inventoryData", JSON.stringify(updatedData));
      return {
        ...state,
        inventoryData: updatedData,
        temporaryData: updatedData
      };
    case "RESET_DATA":
      return {
        ...state,
        temporaryData: state.inventoryData
      };
    default:
      return state;
  }
};
