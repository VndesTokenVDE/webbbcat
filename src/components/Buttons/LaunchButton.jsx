import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const LaunchButton = ({ sx = {}, ...props }) => {
  return (
    <Button target="_blank" href="https://pancakeswap.finance/swap?outputCurrency=0xcB3E4688C4cd90022F74f5C70A775172eCaB4D52&chainId=56" arrow fit variant="contained" sx={{ borderRadius: 4, ...sx }} {...props}>
     BUY NOW
    </Button>
  );
};

export default LaunchButton;
