import { useState } from "react";
import ShowDiscount from "./ShowDiscount";

export default function Discount({ isParent }) {
  const [showDiscOption, setShowDiscOption] = useState(false);

  const handleDisc = () => {
    setShowDiscOption(true);
  };

  return (
    <>
      {showDiscOption ? (
        <ShowDiscount isParent={isParent} />
      ) : (
        <button
          className={`add-disc-btn ${isParent ? "" : "child"}`}
          onClick={handleDisc}
        >
          Add Discount
        </button>
      )}
    </>
  );
}
