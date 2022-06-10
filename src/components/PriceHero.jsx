import PriceQueryCard from "./PriceQueryCard";
import PriceDataCard from "./PriceDataCard";

const PriceHero = ({
  inputText,
  getPrice,
  priceQueryData,
  displayPriceData,
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
        />
      )}
    </div>
  );
};

export default PriceHero;
