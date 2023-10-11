import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {
  Button,
  Checkbox,
  Input,
  Paper,
  TableHead,
  TextField,
} from "@mui/material";
import { useState } from "react";

const Formulario = () => {
  const [selectedImages, setSelectedImages] = useState(Array(5).fill(null));

  const handleImageChange = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImages = [...selectedImages];
        newImages[index] = e.target.result;
        setSelectedImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Accordion>
      <AccordionSummary>
        <Typography variant="h6">Entrada</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer component={Paper} sx={{ backgroundColor: "white" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={2}>Rubros</TableCell>
                <TableCell>Checkbox</TableCell>
                <TableCell colSpan={2}>Comentario</TableCell>
                <TableCell>Evidencia</TableCell>
                <TableCell>Fecha</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from({ length: 5 }, (_, index) => (
                <TableRow key={index}>
                  <TableCell colSpan={2}>
                    <Typography>1.-No se Encuentra Cartel del Mes</Typography>
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 40,
                          color: "#001952",
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell colSpan={2}>
                    <TextField label="Comentario" fullWidth />
                  </TableCell>
                  <TableCell>
                    {selectedImages[index] ? (
                      <img
                        src={selectedImages[index]}
                        alt="Selected"
                        style={{
                          width: "250px",
                          height: "250px",
                        }}
                      />
                    ) : (
                      <label>
                        <Input
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          onChange={(event) => handleImageChange(event, index)}
                        />
                        <Button
                          variant="contained"
                          component="span"
                          style={{ cursor: "pointer" }}
                        >
                          {selectedImages[index]
                            ? "Cambiar Imagen"
                            : "Seleccionar Imagen"}
                        </Button>
                      </label>
                    )}
                  </TableCell>
                  <TableCell>
                    <TextField type="date" InputLabelProps={{ shrink: true }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export default Formulario;
