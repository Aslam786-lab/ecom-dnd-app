import { closestCenter, DndContext } from "@dnd-kit/core";
import "./styles/App.css";
import ProductPicker from "./components/product-picker/ProductPicker";
import SelectedProdList from "./components/selected-product/SelectedProdList";
import { useState } from "react";

function App() {
  const [openPicker, setOpenPicker] = useState(false);
  const handlePicker = () => {
    setOpenPicker(!openPicker);
  };
  return (
    <div className="app">
      <DndContext collisionDetection={closestCenter}>
        <div className="app-container">
          <h1>Add Products</h1>
          <SelectedProdList handlePicker={handlePicker} />
          <button className="add-product-btn">Add Product</button>
        </div>
      </DndContext>
      {openPicker ? <ProductPicker togglePicker={handlePicker} /> : null}
    </div>
  );
}

export default App;
