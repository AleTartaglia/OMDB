import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Bar = ({ onChange, onSubmit, input, userlog, logout }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/movies"><i className="fas fa-film fa-2x" style={{ color: "#e4b814", margin: " 0 5px" }}></i>
        <Navbar.Brand>  <span>OMDB</span> </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" style={{ display: "flex", justifyContent: "space-between" }}>
        <Nav>
          <Link to="/movies" style={{ textDecoration: "none", color: "white", margin: " 0 5px" }}><b>Peliculas</b></Link>
          {userlog ? <Link to="/movies/favorites" style={{ textDecoration: "none", color: "white", margin: " 0 5px" }}><b> Favoritos</b></Link> : null
          }
        </Nav>
        <div style={{ display: "flex", alignItems: "center", marginRight: "50px" }}>
          <div style={{ marginRight: "100px" }}>
            <Form inline onSubmit={onSubmit} style={{ alignText: "center" }}>
              <FormControl onChange={onChange} value={input} type="text" placeholder="Search" className="mr-sm-2" />
              <Button type="submit" variant="outline-warning" >Search</Button>
            </Form>
          </div>
          {userlog ? <>
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <Link to="/movies" style={{ textDecoration: "none", color: "white", margin: " 0 5px" }}> {userlog}  <i className="fas fa-user-circle"> </i></Link>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ backgroundColor: "#343a40" }}>
                <Dropdown.Item ><Link to="/movies/favorites" style={{ textDecoration: "none", color: "white", backgroundColor: "#343a40" }}><b> Favoritos</b></Link></Dropdown.Item>
                <Dropdown.Item ><Link to="/login" onClick={logout} style={{ textDecoration: "none", color: "white", backgroundColor: "#343a40" }}>Log Out</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
            :
            <>
              <Link to="/movies/login" style={{ textDecoration: "none", color: "white", margin: " 0 5px" }}>Log In <i className="fas fa-user-circle"></i></Link>
              <Link to="/movies/register" style={{ textDecoration: "none", color: "white", margin: " 0 5px" }}>Sign In</Link>
            </>
          }
        </div>

      </Navbar.Collapse>
    </Navbar >
  )
}
export default Bar;