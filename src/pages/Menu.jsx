import {
  Grid,
  Typography,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Button,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={4}
      component={Paper}
      elevation={12}
      sx={{ marginTop: "30px", padding: "40px" }}
    >
      <Grid item xs={6}>
        <Typography variant="h4" gutterBottom textAlign={"center"}>
          Nuevo Checklist
        </Typography>
        <form>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ marginTop: "10px" }}
            onClick={() => navigate("formulario")}
          >
            Nuevo Checklist
          </Button>
        </form>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4" gutterBottom textAlign={"center"}>
          Planes de Acción
        </Typography>
        <Typography
          variant="p"
          gutterBottom
          textAlign={"center"}
          sx={{ marginBottom: "30px" }}
        >
          VISUALIZA LOS PLANES DE ACCIÓN POR COMPLETAR O QUE YA FUERON
          COMPLETADOS
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          sx={{ marginTop: "28px" }}
          onClick={() => navigate("planes")}
        >
          Planes de Acción
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4" gutterBottom textAlign={"center"}>
          Resumen
        </Typography>
        <Typography variant="p" gutterBottom textAlign={"center"}>
          VISUALIZA LA CALIFICACIÓN PROMEDIO DE CADA DISTRITO
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          sx={{ marginTop: "10px" }}
          onClick={() => navigate("/resumen")}
        >
          Ver Resumen
        </Button>
      </Grid>
    </Grid>
  );
};

export default Menu;
