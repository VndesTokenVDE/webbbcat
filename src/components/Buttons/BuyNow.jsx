import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function BuyNow() {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button color="warning" variant="outlined" onClick={handleClickOpen}>
        TRADE NOW
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          TRADE CAT COIN
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
         <Box sx={{ width: '100%' }}>
            <div className="emdeb-responsive">
                 <iframe src={'https://kyberswap.com/partner-swap?chainId=56&inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0xcB3E4688C4cd90022F74f5C70A775172eCaB4D52&clientId=dexscreener&feeReceiver=0x0DA2a82ED2c387d1751ccbAf999A80b65bdb269E&enableTip=true&chargeFeeBy=currency_out&feeAmount=10'}></iframe>
             </div>
            
           </Box>
        </DialogContent>
        
      </BootstrapDialog>
    </React.Fragment>
  );
}
