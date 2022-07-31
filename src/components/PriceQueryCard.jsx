import { Button } from "@mui/material";

const PriceQueryCard = ({ queryTitle, inputText, getPrice }) => {
  return (
    <div className="price-query-card">
      <h2 className="price-query">{queryTitle}</h2>
      <form className="price-query-form" id="price-query">
        <input
          className="token-price-query-input"
          placeholder="Enter token name..."
          onChange={inputText}
        ></input>
        <Button
          type="submit"
          onClick={getPrice}
          disableRipple
          variant="contained"
          size="small"
          sx={{
            fill: "none",
            color: "white",
            bgcolor: "#2099b4",
            border: "none",
            width: "80px",
            height: "42px",
            cursor: "pointer",
            marginLeft: "15px",
            fontWeight: "bold",
            borderRadius: "none",
          }}
        >
          search
        </Button>
      </form>
    </div>
  );
};

export default PriceQueryCard;
