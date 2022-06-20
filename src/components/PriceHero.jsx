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
