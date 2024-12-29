import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function TodoItem2() {
  let todoName = "Go to College";
  let todoDate = "07/10/2024";
  return (
    <Container>
      <div className="row ">
        <Row>
          <Col sm={6}>{todoName}</Col>
          <Col sm={4}>{todoDate}</Col>
          <Col sm={2}>
          
            <Button variant="danger">Delete</Button>{" "}
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export default TodoItem2;
