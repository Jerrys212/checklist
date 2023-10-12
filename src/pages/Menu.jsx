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

const Menu = () => {
  return (
    <Grid
      container
      spacing={4}
      component={Paper}
      elevation={12}
      sx={{ marginTop: "30px", padding: "40px" }}
    >
      <Grid item xs={6}>
        <Typography variant="h4" gutterBottom>
          Nuevo Checklist
        </Typography>
        <form>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
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
          >
            Nuevo Checklist
          </Button>
        </form>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4" gutterBottom>
          Planes de Acción
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          sx={{ marginTop: "10px" }}
        >
          Nuevo Checklist
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4" gutterBottom>
          Resumen
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          sx={{ marginTop: "10px" }}
        >
          Ver Resumen
        </Button>
      </Grid>
    </Grid>
  );
};

export default Menu;
