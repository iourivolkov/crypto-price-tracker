const PriceQueryCard = ({ queryTitle }) => {
  return (
    <div className="price-query-card">
      <h2 className="price-query">{queryTitle}</h2>
      <form className="price-query-form" id="price-query">
        <input
          className="token-price-query-input"
          placeholder="Enter token name..."
        ></input>
        <button type="submit" className="token-query-btn">
          search
        </button>
      </form>
    </div>
  );
};

export default PriceQueryCard;
