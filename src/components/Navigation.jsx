const Navigation = ({ projectName }) => {
  return (
    <div>
      <ul className="navigation">
        <li id="logo" className="logo">
          {projectName}
        </li>
        <div className="links">
          <li className="crypto-link">crypto</li>
          <li className="nft-link">NFTs</li>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;
