import FooterPriceCard from "./FooterPriceCard";

const Top10List = ({ footerTitle }) => {
  return (
    <div>
      <h2 className="top10mc">{footerTitle}</h2>
      <div className="footer-card-list">
        <FooterPriceCard />
        <FooterPriceCard />
        <FooterPriceCard />
        <FooterPriceCard />
        <FooterPriceCard />
      </div>
    </div>
  );
};

export default Top10List;
