import { useState, useEffect, useRef } from "react";
import {
  FaRobot,
  FaPaperPlane,
  FaSpinner
} from "react-icons/fa";
import api from "../services/api";

function AskAI({ fileName }) {

  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "👋 Welcome! I'm your Industrial AI Copilot. Ask me anything about your uploaded industrial documents."
    }
  ]);

  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {

    chatEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  }, [messages]);

  const askQuestion = async () => {

    if (!fileName) {
      alert("Upload a document first.");
      return;
    }

    if (!question.trim()) {
      return;
    }

    const currentQuestion = question;

    setMessages(prev => [
      ...prev,
      {
        type: "user",
        text: currentQuestion
      }
    ]);

    setQuestion("");

    setLoading(true);

    try {

      const response = await api.post("/ai/ask", {

        fileName,
        question: currentQuestion

      });

      setMessages(prev => [
        ...prev,
        {
          type: "bot",
          text: response.data
        }
      ]);

    } catch (err) {

      setMessages(prev => [
        ...prev,
        {
          type: "bot",
          text: "❌ Failed to get AI response."
        }
      ]);

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

        {

          messages.map((msg,index)=>(

            <div
              key={index}
              className={
                msg.type==="user"
                ? "user-message"
                : "bot-message"
              }
            >

              {

                msg.type==="user"

                ?

                <>👤 {msg.text}</>

                :

                <>🤖 {msg.text}</>

              }

            </div>

          ))

        }

        {

          loading &&

          <div className="bot-message">

            <FaSpinner className="spin"/>

            {" "}Thinking...

          </div>

        }

        <div ref={chatEndRef}></div>

      </div>

      <div className="question-box">

        <textarea

          rows="3"

          placeholder="Ask about maintenance, SOPs, inspections..."

          value={question}

          onChange={(e)=>setQuestion(e.target.value)}

          onKeyDown={(e)=>{

            if(e.key==="Enter" && !e.shiftKey){

              e.preventDefault();

              askQuestion();

            }

          }}

        />

        <button

          onClick={askQuestion}

          disabled={loading}

        >

          <FaPaperPlane/>

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