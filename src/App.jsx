import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Formulario from "./pages/Formulario";
import Menu from "./pages/Menu";
import Planes from "./pages/Planes";
import Plan from "./pages/Plan";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Menu />} />
          <Route path="formulario" element={<Formulario />} />
          <Route path="planes" element={<Planes />} />
          <Route path="plan/:plan" element={<Plan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
