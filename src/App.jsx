import { closestCenter, DndContext } from "@dnd-kit/core";
import "./styles/App.css";
import ProductPicker from "./components/product-picker/ProductPicker";
import SelectedProdList from "./components/selected-product/SelectedProdList";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmptyProducts, reorderProducts } from "./redux/productState";

function App() {
  const [openPicker, setOpenPicker] = useState(false);
  const dispatch = useDispatch();

  const handlePicker = () => {
    setOpenPicker(!openPicker);
  };

  const handleAddProducts = () => {
    dispatch(addEmptyProducts());
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    dispatch(reorderProducts({ active, over }));
  };

  return (
    <div className="app">
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="app-container">
          <h1>Add Products</h1>
          <SelectedProdList handlePicker={handlePicker} />
          <button className="add-product-btn" onClick={handleAddProducts}>
            Add Product
          </button>
        </div>
      </DndContext>
      {openPicker ? <ProductPicker togglePicker={handlePicker} /> : null}
    </div>
  );
}

export default App;
