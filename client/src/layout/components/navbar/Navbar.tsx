import { FC } from "react";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from "./Navbar.module.scss";

export const Navbar: FC = () => (
  <BootstrapNavbar className={styles.nav} fixed="top" sticky="top">
    <Container>
      <BootstrapNavbar.Brand href="/">
        <strong>Sneaker Exchange</strong>
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle />
      <BootstrapNavbar.Collapse className="justify-content-end">
        <Nav className="me-auto">
          <a href="/store">Tienda</a>
          <a href="/store">Inicia Sesión</a>
        </Nav>
      </BootstrapNavbar.Collapse>
    </Container>
  </BootstrapNavbar>
);
