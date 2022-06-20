import PriceChart from "./PriceChart";

const PriceDataCard = ({ tokenData, displayPriceData, inputPrice }) => {
  console.log(tokenData);
  return (
    <div className="price-data-card">
      <header className="price-data-header">
        <div className="token-name">{tokenData.name}</div>
        <div className="token-symbol">{tokenData.symbol}</div>
      </header>
      <PriceChart inputPrice={inputPrice} />
      <section className="token-price-change">
        <div className="token-price">${tokenData.price_usd} USD</div>
        <div
          className={
            tokenData.percent_change_24h >= 0 ? "positive" : "negative"
          }
        >
          {tokenData.percent_change_24h} %
        </div>
      </section>
      <section className="mc-dv">
        <div className="market-cap">
          <b>Market Cap:</b> ${tokenData.market_cap_usd}
        </div>
        <div className="daily-volume">
          <b>24hr Volume:</b> ${tokenData.volume24}
        </div>
      </section>
    </div>
  );
};

export default PriceDataCard;
