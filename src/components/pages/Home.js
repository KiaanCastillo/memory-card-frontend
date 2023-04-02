import React, { useContext } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Home = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Col xs={10} sm={7} md={6} lg={5} xl={4} className="mx-auto mt-5">
      <Card>
        <Card.Header
          className="my-1"
          style={{ textAlign: "center", fontSize: "1.3rem" }}
        >
          <h1>Cardify</h1>
          <p>CMPT 474 | Group 10</p>
        </Card.Header>
        <Card.Body
          className="mt-3"
          style={{ fontWeight: "600", fontSize: "1.1rem" }}
        >
          <Card.Title>The Simplest Flashcard App</Card.Title>
          <Card.Text>
            - Create up to 10 decks <br />- Share your decks' links with others
            <br />- Easy to create, easy to use
            <br />- Simple UI
          </Card.Text>
          {!loggedIn && (
            <Card.Text className="mt-4">
              <Link to="/login">
                <Button variant="primary" className="w-100 mt-3">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="secondary" className="w-100 mt-3">
                  Register
                </Button>
              </Link>
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Home;
