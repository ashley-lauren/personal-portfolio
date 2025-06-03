import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/linkedin-logo.svg";
import navIcon2 from "../assets/img/github-logo.svg";
import navIcon3 from "../assets/img/goodreads-logo.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" style={{ maxWidth: "150px", height: "auto" }}/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" style={{ padding: "36px 0 0 0"}}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ashley-lauren-olson/"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://github.com/ashley-lauren"><img src={navIcon2} alt="Github" /></a>
                <a href="https://www.goodreads.com/user/show/149745312-ashley"><img src={navIcon3} alt="Goodreads" /></a>
            </div>
            <p style={{ padding: "20px 0 0 0"}}>Ashley Lauren Olson, 2025</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
