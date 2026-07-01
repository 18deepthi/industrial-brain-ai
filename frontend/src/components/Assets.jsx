import { FaIndustry, FaFilePdf } from "react-icons/fa";

function Assets({ documents = [] }) {

  const assets = {};

  documents.forEach((doc) => {

    const name = doc.replace(".pdf", "");

    const parts = name.split("_");

    if (parts.length >= 2) {

      const asset = parts[0] + "_" + parts[1];

      if (!assets[asset]) {

        assets[asset] = [];

      }

      assets[asset].push(doc);

    }

  });

  return (

    <div className="asset-card">

      <div className="card-title">

        <h3>⚙ Industrial Assets</h3>

        <small>Grouped by Equipment</small>

      </div>

      {

        Object.keys(assets).length === 0 ?

        (

          <p>No assets found.</p>

        )

        :

        Object.keys(assets).map(asset => (

          <div
            className="asset-box"
            key={asset}
          >

            <h4>

              <FaIndustry />

              {" "}
              {asset}

            </h4>

            {

              assets[asset].map(file => (

                <div
                  className="asset-file"
                  key={file}
                >

                  <FaFilePdf />

                  {file}

                </div>

              ))

            }

          </div>

        ))

      }

    </div>

  );

}

export default Assets;