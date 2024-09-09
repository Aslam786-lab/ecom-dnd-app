import { PickerIcon } from "../icons/Icons";

export default function SelectedProductInfo({
  uniqueId,
  title,
  onPickerClick,
  isParent,
}) {
  return (
    <>
      {isParent && <span>{uniqueId}.</span>}
      <div className={`select-product ${isParent ? "" : "child"}`}>
        <input placeholder="Select Product" disabled value={title} />
        {isParent && (
          <button className="select-product-btn" onClick={onPickerClick}>
            <PickerIcon />
          </button>
        )}
      </div>
    </>
  );
}
