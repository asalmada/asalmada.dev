import React from "react";
import { Container } from "react-bootstrap";

import Header from "./Header";
import Hero from "./Hero";

const stylesheet = {
  app: {
    backgroundColor: "#555d65",
    color: "#fff",
  },
};

const App = () => (
  <>
    <Header />
    <div style={stylesheet.app}>
      <Container>
        <Hero />
      </Container>
    </div>
  </>
);

export default App;
