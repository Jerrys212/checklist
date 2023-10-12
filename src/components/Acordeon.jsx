import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Acordeon = ({ titulo, array, selectedImages, handleImageChange }) => {
  return (
    <Accordion
      defaultExpanded={titulo === "Entrada" ? true : false}
      sx={{ marginBottom: "15px" }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{titulo}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer>
          <Table style={{ textAlign: "center" }}>
            <TableHead>
              <TableRow sx={{ textAlign: "center" }}>
                <TableCell colSpan={2}>Rubros</TableCell>
                <TableCell>Checkbox</TableCell>
                <TableCell colSpan={2}>Comentario</TableCell>
                <TableCell>Evidencia</TableCell>
                <TableCell>Fecha</TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{ textAlign: "center" }}>
              {array.map((pregunta, index) => (
                <TableRow key={index}>
                  <TableCell colSpan={2}>
                    <Typography sx={{ fontWeight: "700" }}>
                      {pregunta.id} .- {pregunta.pregunta_nombre}
                    </Typography>
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
                  <TableCell sx={{ textAlign: "center" }}>
                    {selectedImages[index] ? (
                      <img
                        src={selectedImages[index]}
                        alt="Selected"
                        style={{
                          width: "250px",
                          height: "250px",
                          margin: "0 auto",
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

export default Acordeon;
