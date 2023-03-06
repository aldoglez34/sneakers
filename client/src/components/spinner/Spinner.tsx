import { Spinner as BootstrapSpinner } from "react-bootstrap";

export const Spinner = () => {
  return (
    <section className="d-flex flex-column justify-content-center text-center">
      <div className="text-center">
        <BootstrapSpinner animation="grow" variant="dark" />
      </div>
      <strong>Sneaker Exchange</strong>
    </section>
  );
};
