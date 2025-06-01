import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import thoughtx from "../assets/img/thoughtx.png";
import movieland from "../assets/img/movieland.png";
import ahavah from "../assets/img/ahavah.png";
import personalPortfolio from "../assets/img/personal-portfolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const personalProjects = [
    {
      title: "ThoughtX",
      description: "The interactive podcast community platform. My startup I'm currently working on.",
      imgUrl: thoughtx,
      link: "https://thoughtx.tech",
    },
    {
      title: "Personal Website",
      description: "This website. My personal portfolio.",
      imgUrl: personalPortfolio,
      link: "https://github.com/ashley-lauren/personal-portfolio",
    },
    {
      title: "Ahavah",
      description: "A Bible memory and life integration app. My first real big project.",
      imgUrl: ahavah,
      link: "https://github.com/ashley-lauren/ahavah/",
    },
  ];

  const learningProjects = [
   {
      title: "Movieland",
      description: "Search IMDB movies and shows from a React web app. My first experience with React.",
      imgUrl: movieland,
      link: "https://github.com/ashley-lauren/react-movieland",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 style={{ marginBottom: "36px" }}>Technical Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="personalProjects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Personal</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Learning</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="third">Professional</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          personalProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          learningProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
