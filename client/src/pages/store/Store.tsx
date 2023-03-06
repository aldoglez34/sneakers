import { FC, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useBrands } from "../../hooks/useBrands";
import { useSizes } from "../../hooks/useSizes";
import { useSneakers } from "../../hooks/useSneakers";
import { Layout } from "../../layout/Layout";
import { SneakersSection } from "./components/SneakerSection";
import { Menu } from "./menu/Menu";

export const Store: FC = () => {
  const [activeBrand, setActiveBrand] = useState("TODAS");
  const [activeSize, setActiveSize] = useState();
  const [activeCategory, setActiveCategory] = useState();

  const { brands } = useBrands();
  const { sizes } = useSizes();
  const { sneakers, isLoading } = useSneakers();

  const categories = ["Hombre", "Mujer"];

  const filteredSneakers = useMemo(() => {
    if (activeBrand === "TODAS") return sneakers;
    return sneakers?.filter(
      ({ brand }) => brand.toUpperCase() === activeBrand.toUpperCase()
    );
  }, [activeBrand, sneakers]);

  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={2}>
            <Menu
              {...{
                active: activeBrand,
                className: "mb-3",
                label: "MARCAS",
                onClick: setActiveBrand,
                options: brands,
              }}
            />
            <Menu
              {...{
                active: activeCategory,
                className: "mb-3",
                label: "CATEGORÍA",
                onClick: setActiveCategory,
                options: categories,
              }}
            />
            <Menu
              {...{
                active: activeSize,
                label: "TALLAS",
                onClick: setActiveSize,
                options: sizes,
              }}
            />
          </Col>
          <Col sm={10}>
            <SneakersSection {...{ sneakers: filteredSneakers, isLoading }} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
