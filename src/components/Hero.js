import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";

const stylesheet = {
  hero: {
    padding: "3% 0",
    description: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      paddingRight: "6%",
      button: {
        color: "#fff",
        borderColor: "#fff",
        backgroundColor: "rgb(108, 117, 125)",
        marginRight: "2%",
      },
    },
  },
};

const Hero = () => (
  <Row style={stylesheet.hero}>
    <Col style={stylesheet.hero.description} sm={12} md={8}>
      <h1>André Scheibel de Almada,</h1>
      <h2>Software Engineer.</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        maximus sem sed justo volutpat lobortis
      </p>
      <div>
        <Button
          style={stylesheet.hero.description.button}
          variant="outline-primary"
        >
          EXPLORE WORK
        </Button>
        <Button
          style={stylesheet.hero.description.button}
          variant="outline-primary"
        >
          VIEW PROFILE
        </Button>
      </div>
    </Col>
    <Col sm={12} md={4}>
      <Image
        src="https://avatars.githubusercontent.com/u/13886240?v=4"
        rounded
        fluid
      />
    </Col>
  </Row>
);

export default Hero;
