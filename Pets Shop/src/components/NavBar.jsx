import React, { useContext } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/images/logo.png'
import { FaCat } from "react-icons/fa";
import { IoLogoOctocat } from "react-icons/io5";

import { ThemeContext } from '../context/ThemeContext';

export function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar
      bg={`${theme}`}
      data-bs-theme={`${theme}`}
      className="mb-5"
      sticky="top"
    >
      <Container>
        <div>
          <Navbar.Brand href="#" className="d-flex justify-content-start">
            <img
              src={logo}
              style={{ width: 75, height: 50, marginRight: 10 }}
              alt=""
            />
            Made for pets
          </Navbar.Brand>
        </div>
        <div>
          <input type="text" placeholder="Search" className="form-control" />
        </div>
        <Nav className="d-flex">
          <div></div>
          <Nav.Link href="#" className="mx-3">
            EU UA
          </Nav.Link>
          {theme === "light" ? (
            <FaCat
              onClick={toggleTheme}
              style={{ margin: "12px", fontSize: "18px", cursor: "pointer" }}
            />
          ) : (
            <IoLogoOctocat
              onClick={toggleTheme}
              style={{
                margin: "12px",
                fontSize: "18px",
                cursor: "pointer",
                color: "lightgray",
              }}
            />
          )}
          <Nav.Link href="#">
            <i className="fa fa-shopping-cart mx-3" aria-hidden="true"></i>
          </Nav.Link>
          <Nav.Link href="#">
            <i className="fa fa-user mx-3" aria-hidden="true"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
