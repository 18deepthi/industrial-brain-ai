import { useState } from "react";
import {
  FaCloudUploadAlt,
  FaFilePdf,
  FaFileWord,
  FaFileExcel
} from "react-icons/fa";
import api from "../services/api";

function Upload({ onUploadSuccess }) {

  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const uploadFile = async () => {

    if (!file) {
      alert("Please choose a document.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {

      const response = await api.post("/upload", formData);

      setMessage(response.data);

      if(onUploadSuccess){
        onUploadSuccess(file.name);
      }

    } catch (error) {

      setMessage("Upload Failed");

    }

  };

  return (

    <div className="upload-card">

      <div className="upload-header">

        <FaCloudUploadAlt size={35}/>

        <div>

          <h3>Industrial Document Center</h3>

          <p>
            Upload manuals, SOPs, inspection reports,
            maintenance logs and engineering documents.
          </p>

        </div>

      </div>

      <div className="supported-files">

        <span><FaFilePdf color="#ff4d4f"/> PDF</span>

        <span><FaFileWord color="#3b82f6"/> DOCX</span>

        <span><FaFileExcel color="#22c55e"/> XLSX</span>

      </div>

      <div className="drop-area">

        <FaCloudUploadAlt size={60}/>

        <h4>Drag & Drop Documents</h4>

        <p>or choose a file below</p>

        <input

          type="file"

          className="form-control mt-3"

          accept=".pdf"

          onChange={(e)=>setFile(e.target.files[0])}

        />

      </div>

      <button

        className="btn btn-primary upload-btn"

        onClick={uploadFile}

      >

        Upload Documents

      </button>

      {message && (

        <div className="upload-message">

          {message}

        </div>

      )}

    </div>

  );

}

export default Upload;