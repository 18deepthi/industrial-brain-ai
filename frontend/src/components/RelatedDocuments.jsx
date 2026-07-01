import {
  FaLink,
  FaFilePdf,
  FaArrowRight
} from "react-icons/fa";

function RelatedDocuments({ selectedDocument, documents }) {

  if (!selectedDocument) {

    return (

      <div className="related-card">

        <h3>🔗 Related Documents</h3>

        <p>Select a document to view related files.</p>

      </div>

    );

  }

  // Remove current document
  const relatedDocs = documents.filter(
    doc => doc !== selectedDocument
  );

  return (

    <div className="related-card">

      <div className="related-header">

        <FaLink />

        <div>

          <h3>Related Documents</h3>

          <small>

            Connected Industrial Knowledge

          </small>

        </div>

      </div>

      <div className="selected-document">

        <strong>Current Document</strong>

        <p>{selectedDocument}</p>

      </div>

      {

        relatedDocs.length === 0 ?

        (

          <p>No related documents found.</p>

        )

        :

        relatedDocs.map((doc,index)=>(

          <div

            className="related-item"

            key={index}

          >

            <div>

              <FaFilePdf className="pdf-icon"/>

              <span>{doc}</span>

            </div>

            <FaArrowRight/>

          </div>

        ))

      }

    </div>

  );

}

export default RelatedDocuments;