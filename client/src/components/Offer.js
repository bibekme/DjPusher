import { Alert } from "react-bootstrap";

const Offer = ({ offer }) => {
  return (
    <div className="starter-template text-center mt-5">
      <Alert variant="success">
        <Alert.Heading>{offer.title}</Alert.Heading>
        <hr />
        <p className="mb-0">{offer.message}</p>
      </Alert>
    </div>
  );
};

export default Offer;
