function PriceItem({ price }) {
  return (
    <div className="price-item">
      <span className="price-item-name">
        {price.name}
      </span>

      <span className="price-item-line"></span>

      <span className="price-item-note">
        {price.note}
      </span>

      <span className="price-item-value">
        {price.price}
      </span>
    </div>
  );
}

export default PriceItem;