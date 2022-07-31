import { Button } from "@mui/material";

const Navigation = ({ projectName }) => {
  return (
    <div>
      <ul className="navigation">
        <li id="logo" className="logo">
          {projectName}
        </li>
        <div className="links">
          <Button
            variant="outlined"
            disableRipple
            type="button"
            size="small"
            sx={{
              height: "40px",
              width: "150px",
            }}
          >
            Connect Wallet
          </Button>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;
