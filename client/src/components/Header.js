import { Button, Container } from "react-bootstrap";

const Header = ({ head, description }) => {
  return (
    <Container>
      <div className="starter-template text-center mt-5">
        <h1>{head} Page</h1>
        <p className="lead text-capitalize">{description}</p>

        <Button href={"http://localhost:8000/api/offers/"} target="_blank">
          Click Here to send events
        </Button>
      </div>
    </Container>
  );
};

export default Header;
