import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Formulario from "./pages/Formulario";
import Menu from "./pages/Menu";
import Planes from "./pages/Planes";
import Plan from "./pages/Plan";
import Resumen from "./pages/Resumen";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Menu />} />
          <Route path="formulario" element={<Formulario />} />
          <Route path="planes" element={<Planes />} />
          <Route path="plan/:plan" element={<Plan />} />
          <Route path="resumen" element={<Resumen />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
