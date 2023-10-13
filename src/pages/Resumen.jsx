import { useState } from "react";
import BarChart from "../components/BarChart";
import { UserData } from "../helpers/data";
import { Typography } from "@mui/material";

const Resumen = () => {
  const [userData, setuserData] = useState({
    labels: UserData.map((distritos) => distritos.distrito),
    datasets: [
      {
        label: "Calififacion",
        data: UserData.map((calificaciones) => calificaciones.calificacion),
        backgroundColor: ["#001952"],
      },
    ],
  });

  return (
    <div>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginBottom: "30px" }}
      >
        Resumen{" "}
      </Typography>

      <BarChart chartData={userData} />
    </div>
  );
};

export default Resumen;
