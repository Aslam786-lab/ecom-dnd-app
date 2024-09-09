export default function ShowVariants({ showVariants, toggleVariants }) {
  return (
    <div className="variant-btn">
      <span className="variant-content" onClick={() => toggleVariants()}>
        <span className="variant-text">
          {showVariants ? "Show variants" : "Hide variants"}
        </span>
        {showVariants ? <span>&#8744;</span> : <span>&#8743;</span>}
      </span>
    </div>
  );
}
