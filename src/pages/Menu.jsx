import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

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
            <InputLabel id="demo-simple-select-label">Tienda</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Tienda"
            >
              <MenuItem value={10}>7101</MenuItem>
              <MenuItem value={20}>7120</MenuItem>
              <MenuItem value={30}>7179</MenuItem>
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
          onClick={() => navigate("resumen")}
        >
          Ver Resumen
        </Button>
      </Grid>
    </Grid>
  );
};

export default Menu;
