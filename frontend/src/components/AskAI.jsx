import { useState } from "react";
import {
  FaRobot,
  FaPaperPlane,
  FaSpinner,
  FaUserCircle
} from "react-icons/fa";
import api from "../services/api";

function AskAI({ fileName }) {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {

    if (!fileName) {
      alert("Upload a document first.");
      return;
    }

    if (!question.trim()) {
      alert("Enter a question.");
      return;
    }

    setLoading(true);

    try {

      const response = await api.post("/ai/ask", {

        fileName,
        question

      });

      setAnswer(response.data);

    } catch (err) {

      alert("Failed to get AI response.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="copilot-card">

      <div className="copilot-header">

        <FaRobot size={28}/>

        <div>

          <h3>Industrial AI Copilot</h3>

          <p>

            Ask questions about uploaded industrial documents

          </p>

        </div>

      </div>

      <div className="chat-window">

        <div className="bot-message">

          🤖 Welcome! Ask me about maintenance, SOPs,
          equipment, compliance or inspection reports.

        </div>

        {

          question &&

          <div className="user-message">

            <FaUserCircle/>

            <span>{question}</span>

          </div>

        }

        {

          answer &&

          <div className="bot-message">

            🤖 {answer}

          </div>

        }

      </div>

      <div className="question-box">

        <textarea

          rows="3"

          placeholder="Example: What maintenance is recommended for Pump P201?"

          value={question}

          onChange={(e)=>setQuestion(e.target.value)}

        />

        <button

          onClick={askQuestion}

          disabled={loading}

        >

          {

            loading ?

            <FaSpinner className="spin"/>

            :

            <FaPaperPlane/>

          }

        </button>

      </div>

      <div className="suggestions">

        <span>Suggested Questions</span>

        <div className="chips">

          <button
            onClick={()=>setQuestion("Summarize this document")}
          >
            Summary
          </button>

          <button
            onClick={()=>setQuestion("List safety risks")}
          >
            Safety Risks
          </button>

          <button
            onClick={()=>setQuestion("Show maintenance recommendations")}
          >
            Maintenance
          </button>

          <button
            onClick={()=>setQuestion("Any compliance issues?")}
          >
            Compliance
          </button>

        </div>

      </div>

    </div>

  );

}

export default AskAI;