import { FC } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Button } from "../../components";
import { useSneaker } from "../../hooks/useSneaker";
import { Layout } from "../../layout/Layout";

export const SneakerDetails: FC = () => {
  const { sneakerId } = useParams();

  const { sneaker, isLoading } = useSneaker(sneakerId!);

  console.log({ sneaker });

  return (
    <Layout>
      <Row className="mt-4">
        <Col sm={8}>
          <Image src={sneaker?.image} fluid />
        </Col>
        <Col sm={4}>
          <h3>
            <strong>{sneaker?.name}</strong>
          </h3>
          {sneaker?.model && (
            <h5 className="text-secondary">{sneaker.model}</h5>
          )}
          <section className="my-4">
            <span>Talla: 7</span>
          </section>
          <Row>
            <Col className="d-flex flex-column">
              <Button
                className="py-3"
                label={`Comprar por $${sneaker?.price}`}
                size="lg"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};
