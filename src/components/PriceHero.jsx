import PriceQueryCard from "./PriceQueryCard";
import PriceDataCard from "./PriceDataCard";

const PriceHero = ({
  inputText,
  getPrice,
  priceQueryData,
  displayPriceData,
  inputPrice,
  tokenSymbol,
}) => {
  const cryptoPriceQuery = "What's the price of..";
  return (
    <div className="price-card-group">
      <PriceQueryCard
        queryTitle={cryptoPriceQuery}
        inputText={inputText}
        getPrice={getPrice}
      />
      {!displayPriceData && (
        <img
          src="https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3432&q=80"
          className="placeholder-img"
        />
      )}
      {displayPriceData && (
        <PriceDataCard
          tokenData={priceQueryData}
          displayPriceData={displayPriceData}
          inputPrice={inputPrice}
          tokenSymbol={tokenSymbol}
        />
      )}
    </div>
  );
};

export default PriceHero;
