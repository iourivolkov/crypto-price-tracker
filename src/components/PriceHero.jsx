import PriceQueryCard from "./PriceQueryCard";
import PriceDataCard from "./PriceDataCard";

const PriceHero = ({ inputText, getPrice }) => {
  const cryptoPriceQuery = "What's the price of..";
  return (
    <div className="price-card-group">
      <PriceQueryCard
        queryTitle={cryptoPriceQuery}
        inputText={inputText}
        getPrice={getPrice}
      />
      <PriceDataCard />
    </div>
  );
};

export default PriceHero;
