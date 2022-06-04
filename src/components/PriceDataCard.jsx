const PriceDataCard = () => {
  return (
    <div className="price-data-card">
      <header className="price-data-header">
        <div className="token-name">Bitcoin</div>
        <div className="token-symbol">BTC</div>
      </header>
      <img className="price-chart" src="" alt="price-chart" />
      <section className="token-price-change">
        <div className="token-price">$39,938.23</div>
        <div className="price-change">+1.02%</div>
      </section>
      <section className="mc-dv">
        <div className="market-cap">
          <b>Market Cap:</b> $1,989,383,438.43
        </div>
        <div className="daily-volume">
          <b>24hr Volume:</b> $987,438,438,28
        </div>
      </section>
    </div>
  );
};

export default PriceDataCard;
