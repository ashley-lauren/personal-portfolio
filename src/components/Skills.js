import { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { GradientCircularProgressbar } from "../design/CircularProgressBar";

export const Skills = () => {
   const [selectedCategory, setSelectedCategory] = useState("All");

   const skillsData = [
   // Development
   { name: "Manual QA & Debugging", percentage: 90, category: "Development" },
   { name: "REST APIs", percentage: 80, category: "Development" },
   { name: "MVVM Architecture", percentage: 70, category: "Development" },
   { name: "Flask", percentage: 70, category: "Development" },
   { name: "Scalability & Performance Optimization", percentage: 65, category: "Development" },
   { name: "Docker", percentage: 50, category: "Development" },
   { name: "Web Development", percentage: 40, category: "Development" },
   { name: "GraphQL APIs", percentage: 40, category: "Development" },
   { name: "CI/CD (GitHub Actions)", percentage: 20, category: "Development" },
   { name: "Kubernetes", percentage: 10, category: "Development" },

   // Programming
   { name: "Dart", percentage: 90, category: "Programming" },
   { name: "Python", percentage: 85, category: "Programming" },
   { name: "Java", percentage: 80, category: "Programming" },
   { name: "JavaScript", percentage: 60, category: "Programming" },
   { name: "SQL", percentage: 60, category: "Programming" },
   { name: "TypeScript", percentage: 55, category: "Programming" },
   { name: "C/C++", percentage: 40, category: "Programming" },

   // AI/ML
   { name: "LLM Integration", percentage: 85, category: "AI/ML" },
   { name: "Machine Learning", percentage: 80, category: "AI/ML" },
   { name: "Data Processing & Feature Engineering", percentage: 80, category: "AI/ML" },
   { name: "Apache Spark", percentage: 80, category: "AI/ML" },
   { name: "Scikit-Learn", percentage: 75, category: "AI/ML" },
   { name: "TensorFlow", percentage: 40, category: "AI/ML" },
   { name: "Deepgram Transcription", percentage: 70, category: "AI/ML" },

   // Cloud & Data
   { name: "Firestore", percentage: 85, category: "Cloud & Data" },
   { name: "Firebase", percentage: 80, category: "Cloud & Data" },
   { name: "Schema Design & Query Optimization", percentage: 75, category: "Cloud & Data" },
   { name: "PostgreSQL", percentage: 70, category: "Cloud & Data" },
   { name: "AWS", percentage: 65, category: "Cloud & Data" },
   { name: "Google Cloud", percentage: 60, category: "Cloud & Data" }, 
   { name: "Supabase", percentage: 40, category: "Cloud & Data" },

   // Frameworks & Tools
   { name: "Flutter", percentage: 90, category: "Frameworks & Tools" },
   { name: "Git & GitHub", percentage: 85, category: "Frameworks & Tools" },
   { name: "HTML", percentage: 80, category: "Frameworks & Tools" },
   { name: "Postman", percentage: 80, category: "Frameworks & Tools" },
   { name: "App Store & Play Store Deployment", percentage: 80, category: "Business" },
   { name: "CSS", percentage: 75, category: "Frameworks & Tools" },
   { name: "Bootstrap", percentage: 40, category: "Frameworks & Tools" },
   { name: "Node.js", percentage: 40, category: "Frameworks & Tools" },
   { name: "React.js", percentage: 35, category: "Frameworks & Tools" },
   { name: "Express.js", percentage: 35, category: "Frameworks & Tools" },

   // Design
   { name: "Content Experience Design", percentage: 80, category: "Design" },
   { name: "UI/UX Design", percentage: 75, category: "Design" },
   { name: "Responsive UX Design", percentage: 70, category: "Design" },
   { name: "WordPress", percentage: 60, category: "Design" },

   // Business
   { name: "Cross-Functional Teamwork", percentage: 90, category: "Business" },
   { name: "Google Workspace", percentage: 90, category: "Business" },
   { name: "Startup Strategy", percentage: 80, category: "Business" },
   { name: "Pitching & Storytelling", percentage: 80, category: "Business" },
   { name: "Product-Market Fit", percentage: 70, category: "Business" },
   { name: "Customer Development", percentage: 65, category: "Business" },
   { name: "Leadership", percentage: 65, category: "Business" },
   { name: "Microsoft Office Suite", percentage: 60, category: "Business" },
   { name: "Email Marketing", percentage: 40, category: "Business" },

   // Other (Soft Skills)
   { name: "Problem Solving", percentage: 90, category: "Other" },
   { name: "Initiative", percentage: 90, category: "Other" },
   { name: "Time Management", percentage: 85, category: "Other" },
   { name: "Adaptability", percentage: 85, category: "Other" },
   { name: "Communication", percentage: 80, category: "Other" },
   ];

  const categories = ["All", ...Array.from(new Set(skillsData.map(skill => skill.category)))];

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter(skill => skill.category === selectedCategory);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skill gradient-bg" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>

              {/* Filter chips */}
              <div className="filter-chips" style={{ marginTop: "12px", marginBottom: "36px" }}>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`chip ${selectedCategory === category ? "active" : ""}`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Skill carousel */}
              <Carousel responsive={responsive} infinite={true} className="skill-slider" style={{ marginBottom: "36px" }}>
                {filteredSkills.map((skill, index) => (
                  <div className="item" key={index}>
                    <GradientCircularProgressbar percentage={skill.percentage} />
                    <h5 style={{ margin: "0px 8px" }}>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
