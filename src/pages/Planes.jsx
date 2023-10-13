import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
const Planes = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  const rows = [
    {
      id: 1,
      tda: "TDA 1",
      supervisor: "Supervisor 1",
      distrito: "Distrito 1",
      calificacion: 90,
      visita: "Visita 1",
      folio: 1234,
    },
    {
      id: 2,
      tda: "TDA 2",
      supervisor: "Supervisor 2",
      distrito: "Distrito 2",
      calificacion: 85,
      visita: "Visita 2",
      folio: 5678,
    },
    {
      id: 3,
      tda: "TDA 3",
      supervisor: "Supervisor 3",
      distrito: "Distrito 3",
      calificacion: 92,
      visita: "Visita 3",
      folio: 9876,
    },
    {
      id: 4,
      tda: "TDA 4",
      supervisor: "Supervisor 4",
      distrito: "Distrito 4",
      calificacion: 88,
      visita: "Visita 4",
      folio: 3456,
    },
    {
      id: 5,
      tda: "TDA 5",
      supervisor: "Supervisor 5",
      distrito: "Distrito 5",
      calificacion: 79,
      visita: "Visita 5",
      folio: 6543,
    },
  ];

  const columns = [
    { field: "id", label: "#TDA" },
    { field: "tda", label: "TDA" },
    { field: "supervisor", label: "Supervisor" },
    { field: "distrito", label: "Distrito" },
    { field: "calificacion", label: "Calificación" },
    { field: "visita", label: "Visita" },
    { field: "folio", label: "Folio" },
  ];

  const filteredRows = rows.filter(
    (row) =>
      row.tda.includes(search) ||
      row.supervisor.includes(search) ||
      row.distrito.includes(search)
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TextField
        label="Buscar"
        fullWidth
        variant="outlined"
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  {columns.map((column) => (
                    <TableCell key={column.field}>
                      {column.field === "folio" ? (
                        <Link to={`/admin/plan/${row.folio}`}>
                          <Button variant="contained" color="primary">
                            {row[column.field]}
                          </Button>
                        </Link>
                      ) : (
                        row[column.field]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default Planes;
