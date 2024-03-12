import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { RiSearch2Fill } from "react-icons/ri";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

function NavBar() {
  let navigate = useNavigate();

  let reduxState = useSelector((state) => state.myOrder);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand
            type="button"
            onClick={() => {
              navigate("/");
            }}
          >
            Navbar scroll
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/newProduct">
                Product
              </Nav.Link>
              <Nav.Link as={Link} to="/signUp">
                Sign-Up
              </Nav.Link>
              <Nav.Link as={Link} to="/myOrders">
                <FaCartShopping />
                {reduxState.length}
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">
                {" "}
                <RiSearch2Fill />{" "}
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default NavBar;
