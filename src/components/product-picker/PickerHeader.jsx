import { CloseIcon } from "../icons/Icons";

export default function PickerHeader({ togglePicker }) {
  return (
    <>
      <div className="picker-header">
        <h1 className="picker-title">Select Products</h1>
        <div className="close-icon" onClick={() => togglePicker()}>
          <CloseIcon />
        </div>
      </div>
      <div className="horizontal-line" />
    </>
  );
}
