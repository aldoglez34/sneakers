import { Container } from "react-bootstrap";
import { FC } from "react";
import styles from "./Footer.module.scss";

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <Container className="text-center">Sneaker Exchange ©2023</Container>
  </footer>
);
