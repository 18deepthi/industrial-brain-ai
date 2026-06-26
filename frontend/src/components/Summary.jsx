import { useState } from "react";
import {
  FaBrain,
  FaCogs,
  FaShieldAlt,
  FaLightbulb,
  FaFileAlt,
  FaSpinner
} from "react-icons/fa";
import api from "../services/api";

function Summary({ fileName }) {

  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const generateSummary = async () => {

    if (!fileName) {
      alert("Please upload a document first.");
      return;
    }

    setLoading(true);

    try {

      const response = await api.get(
        `/ai/summary?fileName=${encodeURIComponent(fileName)}`
      );

      setSummary(response.data);

    } catch (error) {

      alert("Failed to generate AI summary");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="summary-card">

      <div className="summary-header">

        <div>

          <FaBrain size={30}/>

        </div>

        <div>

          <h3>AI Knowledge Summary</h3>

          <p>
            Industrial document intelligence powered by Gemini AI
          </p>

        </div>

      </div>

      <div className="summary-status">

        <FaFileAlt/>

        <span>

          {fileName
            ? fileName
            : "No document uploaded"}

        </span>

      </div>

      <button
        className="generate-btn"
        onClick={generateSummary}
        disabled={loading}
      >

        {

          loading ?

          <>
            <FaSpinner className="spin"/>
            Generating...
          </>

          :

          "Generate AI Summary"

        }

      </button>

      <div className="summary-grid">

        <div className="summary-box">

          <FaCogs/>

          <h4>Equipment</h4>

          <p>
            Assets, machines and
            industrial components
            identified by AI.
          </p>

        </div>

        <div className="summary-box">

          <FaShieldAlt/>

          <h4>Risk Analysis</h4>

          <p>

            Safety risks,
            compliance gaps and
            maintenance issues.

          </p>

        </div>

        <div className="summary-box">

          <FaLightbulb/>

          <h4>Recommendations</h4>

          <p>

            AI suggestions for
            improving reliability
            and operations.

          </p>

        </div>

      </div>

      <div className="summary-result">

        {

          summary

          ?

          summary

          :

          "AI generated summary will appear here..."

        }

      </div>

    </div>

  );

}

export default Summary;