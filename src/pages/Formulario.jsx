import { useState } from "react";
import {
  entrada,
  checkOut,
  exhibiciones,
  nutricion,
  alimentoNatural,
  alimentoAvanzado,
  alimentoPrescripcion,
  premiosCarMas,
  nutriCSN,
  saludBienestar,
  POGSbelleza,
  POGSsalud,
  POGSlimpieza,
  POGSCSN,
  ModaDiversion,
  planomdperro,
  planohogarperro,
  planomdgato,
  planohogargato,
  modaCSN,
  petcoZoo,
  planoacuario,
  planoreptil,
  planoave,
  planoroedor,
  ZOOCSN,
} from "../helpers/preguntas";
import Acordeon from "../components/Acordeon";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Formulario = () => {
  const categorias = [
    { titulo: "Entrada", array: entrada },
    { titulo: "CheckOut", array: checkOut },
    { titulo: "Exhibiciones", array: exhibiciones },
    { titulo: "Nutricion", array: nutricion },
    { titulo: "Alimento Natural", array: alimentoNatural },
    { titulo: "Alimento Avanzado", array: alimentoAvanzado },
    { titulo: "Alimento Prescripción", array: alimentoPrescripcion },
    { titulo: "Premios Carnazas y Más", array: premiosCarMas },
    { titulo: "Nutricion Pendientes Areas Ejecutivas", array: nutriCSN },
    { titulo: "Salud y Bienestar", array: saludBienestar },
    { titulo: "Sección Belleza", array: POGSbelleza },
    { titulo: "Sección Salud", array: POGSsalud },
    { titulo: "Sección Limpieza", array: POGSlimpieza },
    { titulo: "Salud y Bienestar Pendientes Areas Ejecutivas", array: POGSCSN },
    { titulo: "Moda Y Diversion", array: ModaDiversion },
    { titulo: "Planograma Perro", array: planomdperro },
    { titulo: "Hogar Prescripción", array: planohogarperro },
    { titulo: "Planograma Gato", array: planomdgato },
    { titulo: "Hogar Gato", array: planohogargato },
    { titulo: "Moda y Diversión Pendientes Areas Ejecutivas", array: modaCSN },
    { titulo: "Petco Zoo", array: petcoZoo },
    { titulo: "Acuario", array: planoacuario },
    { titulo: "Reptiles", array: planoreptil },
    { titulo: "Aves", array: planoave },
    { titulo: "Roedores", array: planoroedor },
    { titulo: "Petco Zoo Pendientes Areas Ejecutivas", array: ZOOCSN },
  ];

  const [selectedImages, setSelectedImages] = useState([]);

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
    <>
      <form>
        {categorias.map((categoria, index) => (
          <Acordeon
            key={index}
            titulo={categoria.titulo}
            array={categoria.array}
            selectedImages={selectedImages}
            handleImageChange={(event) => handleImageChange(event, index)}
          />
        ))}

        <Box
          sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              backgroundColor: "#001952",
              "&:hover": { backgroundColor: "#001952" },
            }}
          >
            Guardar
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Formulario;
