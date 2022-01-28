import { Container, CssBaseline } from "@mui/material";

export const Layout = ({ children }) => 
  <Container sx={{ backgroundColor: "#241F20" }} mminWidth="100%" minHeight="100%">
    <CssBaseline  />
    {children}
  </Container>