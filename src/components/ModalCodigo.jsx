import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ModalCodigo = ({ open, handleClose, cerrar }) => {
  return (
    <>
      <Dialog open={open} onClose={cerrar}>
        <DialogTitle>Codigo de Verificación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ingresa el codigo de verificacion que hemos mandado a tu aplicación
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="codigo"
            label="Codigo"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={cerrar}>Cancelar</Button>
          <Button onClick={handleClose}>Verificar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalCodigo;
