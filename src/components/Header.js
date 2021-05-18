import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const stylesheet = {
  navBar: {
    backgroundColor: "#6c757d",
  },
  navLink: {
    color: "rgba(255,255,255,.75)",
  },
};

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={stylesheet.navBar}
      variant="dark"
    >
      <Container>
        <Navbar.Brand>asalmada.dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link style={stylesheet.navLink} href="#about">
              {"<About />"}
            </Nav.Link>
            <Nav.Link style={stylesheet.navLink} href="#work">
              {"<Work />"}
            </Nav.Link>
            <Nav.Link style={stylesheet.navLink} href="#contact">
              {"<Contact />"}
            </Nav.Link>
            <Nav.Link
              style={stylesheet.navLink}
              href="https://github.com/asalmada"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Nav.Link>
            <Nav.Link
              style={stylesheet.navLink}
              href="https://github.com/asalmada"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
