import {
  FaBell,
  FaSearch,
  FaUserCircle,
  FaMoon
} from "react-icons/fa";

function Header() {
  return (

    <div className="header">

      <div className="header-left">

        <h1>
          🏭 Industrial Brain AI
        </h1>

        <p>
          Unified Asset & Operations Intelligence Platform
        </p>

      </div>

      <div className="header-right">

        <div className="search-box">

          <FaSearch className="search-icon"/>

          <input
            type="text"
            placeholder="Search equipment, SOPs, manuals..."
          />

        </div>

        <div className="icon-btn">
          <FaMoon />
        </div>

        <div className="icon-btn">
          <FaBell />
        </div>

        <div className="profile">

          <FaUserCircle size={38}/>

          <div>

            <h5>Plant Engineer</h5>

            <small>Administrator</small>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Header;