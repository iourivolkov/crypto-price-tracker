const PriceQueryCard = ({ queryTitle, inputText, getPrice }) => {
  return (
    <div className="price-query-card">
      <h2 className="price-query">{queryTitle}</h2>
      <form className="price-query-form" id="price-query">
        <input
          className="token-price-query-input"
          placeholder="Enter token name..."
          onChange={inputText}
        ></input>
        <button type="submit" className="token-query-btn" onClick={getPrice}>
          search
        </button>
      </form>
    </div>
  );
};

export default PriceQueryCard;
