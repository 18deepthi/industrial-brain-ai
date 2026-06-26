import {
  FaHome,
  FaFolderOpen,
  FaIndustry,
  FaProjectDiagram,
  FaClipboardCheck,
  FaChartLine,
  FaRobot,
  FaCog,
  FaBrain,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo-section">

        <div className="logo-circle">
          <FaBrain />
        </div>

        <div>
          <h2>Industrial</h2>
          <h3>Brain AI</h3>
        </div>

      </div>

      <div className="menu">

        <div className="menu-item active">
          <FaHome />
          <span>Dashboard</span>
        </div>

        <div className="menu-item">
          <FaFolderOpen />
          <span>Documents</span>
        </div>

        <div className="menu-item">
          <FaIndustry />
          <span>Assets</span>
        </div>

        <div className="menu-item">
          <FaProjectDiagram />
          <span>Knowledge Graph</span>
        </div>

        <div className="menu-item">
          <FaClipboardCheck />
          <span>Compliance</span>
        </div>

        <div className="menu-item">
          <FaChartLine />
          <span>Analytics</span>
        </div>

        <div className="menu-item">
          <FaRobot />
          <span>AI Copilot</span>
        </div>

      </div>

      <div className="bottom-section">

        <div className="system-status">

          <div className="status-dot"></div>

          <span>System Online</span>

        </div>

        <div className="settings">

          <FaCog />

          <span>Settings</span>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;