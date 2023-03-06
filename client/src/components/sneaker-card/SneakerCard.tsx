import { FC } from "react";
import { Card } from "react-bootstrap";
import { Sneaker } from "../../types/types";
import styles from "./SneakerCard.module.scss";

type SneakerCardType = {
  sneaker: Sneaker;
};

export const SneakerCard: FC<SneakerCardType> = ({ sneaker }) => (
  <Card
    as="a"
    border="dark"
    className={styles.sneakerCard}
    href={`/store/${sneaker._id}`}
  >
    <Card.Header className="d-flex flex-column">
      {sneaker.name}
      {sneaker.model && (
        <small className="text-secondary">{sneaker.model}</small>
      )}
    </Card.Header>
    <Card.Body className="d-flex flex-column">
      <Card.Title>
        <Card.Img src={sneaker.image} />
      </Card.Title>
      <Card.Text className="mt-auto">
        <strong>{`$${sneaker.price} MXN`}</strong>
      </Card.Text>
    </Card.Body>
  </Card>
);
