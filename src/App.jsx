import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Formulario from "./pages/Formulario";
import Menu from "./pages/Menu";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
