import {
  FaFileAlt,
  FaIndustry,
  FaExclamationTriangle,
  FaProjectDiagram
} from "react-icons/fa";

function StatsCards() {

  const stats = [
    {
      icon: <FaFileAlt />,
      value: "1,245",
      title: "Documents",
      desc: "+18 uploaded today",
      color: "blue"
    },
    {
      icon: <FaIndustry />,
      value: "428",
      title: "Assets",
      desc: "Healthy Operations",
      color: "green"
    },
    {
      icon: <FaExclamationTriangle />,
      value: "06",
      title: "Critical Alerts",
      desc: "2 High Priority",
      color: "red"
    },
    {
      icon: <FaProjectDiagram />,
      value: "2145",
      title: "Knowledge Nodes",
      desc: "AI Connected",
      color: "purple"
    }
  ];

  return (

    <div className="stats-grid">

      {stats.map((item,index)=>(

        <div className={`stats-card ${item.color}`} key={index}>

          <div className="stats-icon">

            {item.icon}

          </div>

          <div>

            <h2>{item.value}</h2>

            <h4>{item.title}</h4>

            <small>{item.desc}</small>

          </div>

        </div>

      ))}

    </div>

  );

}

export default StatsCards;