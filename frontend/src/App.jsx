import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/dashboard.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";

import Upload from "./components/Upload";
import Summary from "./components/Summary";
import AskAI from "./components/AskAI";
import Insights from "./components/Insights";
import AssetHealth from "./components/AssetHealth";
import KnowledgeGraph from "./components/KnowledgeGraph";

function App() {

  const [fileName, setFileName] = useState("");

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-main">

        <Header />

        <StatsCards />

        <div className="content-grid">

          <div className="left-section">

            <Upload
              onUploadSuccess={setFileName}
            />

            <Summary
              fileName={fileName}
            />

          </div>

          <div className="right-section">

            <AskAI
              fileName={fileName}
            />

            <Insights />
            <AssetHealth />
            <KnowledgeGraph />

          </div>

        </div>

      </div>

    </div>

  );

}

export default App;