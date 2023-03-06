import { FC } from "react";
import { Row } from "react-bootstrap";
import { SneakerCard } from "../../../components";
import { Spinner } from "../../../components/spinner/Spinner";
import { Sneaker } from "../../../types/types";

interface SneakersSectionProps {
  isLoading?: boolean;
  sneakers?: Sneaker[];
}

export const SneakersSection: FC<SneakersSectionProps> = ({
  isLoading,
  sneakers = [],
}) => {
  if (isLoading) return <Spinner />;
  return (
    <Row className="d-flex flex-wrap justify-content-start">
      {sneakers?.map((sneaker, idx) => (
        <SneakerCard key={idx} {...{ sneaker }} />
      ))}
    </Row>
  );
};
