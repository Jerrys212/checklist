import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Plan = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Rubros</TableCell>
            <TableCell>Comentario</TableCell>
            <TableCell>Evidencia</TableCell>
            <TableCell>Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Aquí puedes mapear tus datos y crear filas en la tabla */}
          <TableRow>
            <TableCell
              colSpan={4}
              sx={{
                backgroundColor: "#001952",
                color: "white",
                fontWeight: "700",
                textAlign: "center",
                textTransform: "uppercase",
                fontSize: "30px",
              }}
            >
              Entrada
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Algo relacionado con rubros</TableCell>
            <TableCell>Un comentario interesante</TableCell>
            <TableCell>Enlace a la evidencia</TableCell>
            <TableCell>2023-10-11</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Algo relacionado con rubros</TableCell>
            <TableCell>Un comentario interesante</TableCell>
            <TableCell>Enlace a la evidencia</TableCell>
            <TableCell>2023-10-11</TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              colSpan={4}
              sx={{
                backgroundColor: "#001952",
                color: "white",
                fontWeight: "700",
                textAlign: "center",
                textTransform: "uppercase",
                fontSize: "30px",
              }}
            >
              CheckOut
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Algo relacionado con rubros</TableCell>
            <TableCell>Un comentario interesante</TableCell>
            <TableCell>Enlace a la evidencia</TableCell>
            <TableCell>2023-10-11</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Algo relacionado con rubros</TableCell>
            <TableCell>Un comentario interesante</TableCell>
            <TableCell>Enlace a la evidencia</TableCell>
            <TableCell>2023-10-11</TableCell>
          </TableRow>
          {/* Puedes agregar más filas aquí */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Plan;
