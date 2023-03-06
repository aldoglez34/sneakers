import { FC } from "react";
import { Navbar } from "./components/navbar/Navbar";
import Container from "react-bootstrap/Container";
import { Footer } from "./components/footer/Footer";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: any;
};

export const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    <article className={styles.mainArticle}>
      <Container>{children}</Container>
    </article>
    <Footer />
  </>
);
