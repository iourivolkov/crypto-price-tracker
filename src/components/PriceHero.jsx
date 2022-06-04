import PriceQueryCard from "./PriceQueryCard";
import PriceDataCard from "./PriceDataCard";

const PriceHero = () => {
  const cryptoPriceQuery = "What's the price of..";
  return (
    <div>
      <PriceQueryCard queryTitle={cryptoPriceQuery} />
      <PriceDataCard />
    </div>
  );
};

export default PriceHero;
