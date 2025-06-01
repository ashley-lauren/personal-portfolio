import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="proj-imgbx" style={{
            boxShadow: "4px 4px 64px rgba(100, 100, 100, 0.5)",
            borderRadius: "12px",
            overflow: "hidden",
            transition: "box-shadow 0.3s ease",
          }}>
        <img src={imgUrl} alt={ title }/>
        <div className="proj-txtx">
          <h4 style = {{ margin: "0 6px 16px 6px" }}>{title}</h4>
          <p style = {{
            padding: "6px",
            fontSize: "14px",
            fontWeight: 100,
            dominantBaseline: "central",
            textAnchor: "middle",
            family: 'Centra',
            height: 1.7,
          }}>{description}</p>
        </div>
      </div>
      </a>
    </Col>
  )
}
