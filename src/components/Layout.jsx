import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";
// import Header from "./Header";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}

      <Container maxWidth="xl" sx={{ marginTop: "30px" }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
