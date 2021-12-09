import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import './AddButton.css'
import { DialogActions, Button} from '@material-ui/core';
import GatewayFormContent from '../GatewayFormContent/GatewayFormContent';
import IdpFormContent from '../IdpFormContent/IdpFormContent';


function SimpleDialog(props) {
  const { onClose, selectedValue, open, name } = props;
  let submitName = name.includes("gateway") ? "Save and generate file" : "Save";
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <div className="top-content">
        <DialogTitle id="form-dialog-title">{name}</DialogTitle>
        <Button onClick={handleClose}><CloseIcon/></Button>
    </div>
    {
        name.includes("gateway") ? <GatewayFormContent/> : name.includes("identity") ? <IdpFormContent/> : ""
    }
   
    <DialogActions>
      <div className="add-button">
        <button style={{"background": "#FFFFFF", "color": "#055BB5"}} onClick={handleClose}>Cancel</button>
      </div>
      <div className="add-button">
        <button onClick={handleClose}>{submitName}</button>
      </div>
    </DialogActions>
  </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function AddButton( {name} ) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
      <div className="add-button">
            <button onClick={handleClickOpen}>{name}</button>
            <SimpleDialog open={open} name={name} onClose={handleClose} />
     </div>
  );
}