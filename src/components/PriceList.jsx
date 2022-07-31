import PriceRow from "./PriceRow";
import PriceListHeader from "./PriceListHeader";
import { useEffect } from "react";

const PriceList = () => {
  return (
    <div>
      <PriceListHeader />
      <PriceRow />
    </div>
  );
};

export default PriceList;
