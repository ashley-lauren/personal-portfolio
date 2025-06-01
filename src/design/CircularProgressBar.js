import { CircularProgressbar } from "react-circular-progressbar";
import Gradient from './Gradient'

const getCompetencyLabel = (percentage) => {
  if (percentage < 33) return "Learning";
  if (percentage < 65) return "Developing";
  if (percentage < 80) return "Competent";
  if (percentage < 90) return "Proficient";
  return "Expert";
};

export const GradientCircularProgressbar = ({ percentage }) => {

  const label = getCompetencyLabel(percentage);
 
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", height: "200px"}}>
      <div style={{ height: 150, width: 150, filter: "drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.25))",}}>
      <Gradient />
      <CircularProgressbar
        strokeWidth={10}
        value={percentage}
        text={label}
        
        styles={{
        path: {
          stroke: "url(#circular-progress-bar)",
          strokeLinecap: "round",
        },
        trail: {
          stroke: "#00000000",
        },
        text: {
          fill: "#666666",
          fontSize: "8px",
          fontWeight: 100,
          dominantBaseline: "central",
          textAnchor: "middle",
          family: 'Centra',
          margin: '4px'
        },
      }}
      /></div>
    </div>
  )
}
