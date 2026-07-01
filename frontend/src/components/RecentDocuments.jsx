import {
  FaFilePdf,
  FaCheckCircle
} from "react-icons/fa";

function RecentDocuments({
  documents,
  selectedDocument,
  setSelectedDocument
}) {

  return (

    <div className="recent-card">

      <div className="card-title">

        <h3>📂 Document Repository</h3>

        <small>Industrial Knowledge Base</small>

      </div>

      {

        documents.length === 0 ? (

          <div className="empty-documents">

            <p>No documents uploaded yet.</p>

          </div>

        ) : (

          documents.map((doc, index) => (

            <div

              key={index}

              className={`document-item ${
                selectedDocument === doc ? "active-document" : ""
              }`}

              onClick={() => setSelectedDocument(doc)}

            >

              <div className="document-left">

                <FaFilePdf className="pdf-icon"/>

                <div>

                  <h5>{doc}</h5>

                  <small>PDF Document</small>

                </div>

              </div>

              <div className="document-right">

                <FaCheckCircle className="success-icon"/>

              </div>

            </div>

          ))

        )

      }

    </div>

  );

}

export default RecentDocuments;