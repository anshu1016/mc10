import { AddNew } from "./pages/addNewProduct/AddNew";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Department } from "./pages/departments/Department";
import { IndividualPage } from "./pages/IndividualPage/IndividualPage";
import { LeftBar } from "./pages/leftBar/LeftBar";
import { ProductList } from "./pages/productList/ProductList";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { NoPageFound } from "./pages/noPageFound/NoPageFound";
export default function App() {
  return (
    <div className="App">
      <LeftBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/department" element={<Department />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/add-new-item" element={<AddNew />} />
        <Route path="/product/:id" element={<IndividualPage />} />
        <Route path="/products/:categoryFromURL" element={<ProductList />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </div>
  );
}
