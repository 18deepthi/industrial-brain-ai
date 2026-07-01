import { useState, useEffect } from "react";
import api from "./services/api";

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
import RecentDocuments from "./components/RecentDocuments";
import RelatedDocuments from "./components/RelatedDocuments";
import Assets from "./components/Assets";

function App() {

  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState("");

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = async () => {

    try {

      const response = await api.get("/documents");

      setDocuments(response.data);

      if (
        response.data.length > 0 &&
        !selectedDocument
      ) {
        setSelectedDocument(response.data[0]);
      }

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-main">

        {/* ================= HEADER ================= */}

        <section id="dashboard">

          <Header />

        </section>

        {/* ================= ANALYTICS ================= */}

        <section id="analytics">

          <StatsCards />

        </section>

        {/* ================= FIRST ROW ================= */}

        <div className="dashboard-row">

          <div
            className="card-large"
            id="documents"
          >

            <Upload

              onUploadSuccess={async (fileName) => {

                await loadDocuments();

                setSelectedDocument(fileName);

              }}

            />

          </div>

          <div
            className="card-large"
            id="copilot"
          >

            <AskAI
              fileName={selectedDocument}
            />

          </div>

        </div>

        {/* ================= SECOND ROW ================= */}

        <div className="dashboard-row">

          <div className="card-large">

            <Summary
              fileName={selectedDocument}
            />

            <RecentDocuments

              documents={documents}

              selectedDocument={selectedDocument}

              setSelectedDocument={setSelectedDocument}

            />

          </div>

          <div
            className="card-large"
            id="compliance"
          >

            <Insights />

          </div>

        </div>

        {/* ================= THIRD ROW ================= */}

        <div className="dashboard-row">

          <div
            className="card-large"
            id="assets"
          >

            <Assets

              documents={documents}

            />

            <AssetHealth />

          </div>

          <div
            className="card-large"
            id="graph"
          >

            <RelatedDocuments

              documents={documents}

              selectedDocument={selectedDocument}

            />

            <KnowledgeGraph />

          </div>

        </div>

      </main>

    </div>

  );

}

export default App;