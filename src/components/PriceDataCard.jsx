const PriceDataCard = () => {
  return (
    <div className="price-data-card">
      <header className="price-data-header">
        <span className="token-name">Bitcoin</span>
        <span className="token-symbol">BTC</span>
      </header>
      <img className="price-chart" src="" alt="price-chart" />
      <section>
        <span className="token-price">$39,938.23</span>
        <span className="price-change">+1.02%</span>
      </section>
      <section>
        <div className="market-cap">
          <b>Market Cap</b> $1,989,383,438.43
        </div>
        <div className="daily-volume">
          <b>24hr Volume</b> $987,438,438,28
        </div>
      </section>
    </div>
  );
};

export default PriceDataCard;
