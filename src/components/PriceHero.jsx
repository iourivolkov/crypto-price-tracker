import PriceQueryCard from "./PriceQueryCard";
import PriceDataCard from "./PriceDataCard";

const PriceHero = () => {
  const cryptoPriceQuery = "What's the price of..";
  return (
    <div className="price-card-group">
      <PriceQueryCard queryTitle={cryptoPriceQuery} />
      <PriceDataCard />
    </div>
  );
};

export default PriceHero;
