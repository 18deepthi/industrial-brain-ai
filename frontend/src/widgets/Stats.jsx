import {
FaFileAlt,
FaIndustry,
FaExclamationTriangle,
FaCheckCircle
} from "react-icons/fa";

function Stats(){

return(

<div className="stats">

<div className="stat-card">

<FaFileAlt/>

<h3>145</h3>

<p>Documents</p>

</div>

<div className="stat-card">

<FaIndustry/>

<h3>82</h3>

<p>Assets</p>

</div>

<div className="stat-card">

<FaExclamationTriangle/>

<h3>6</h3>

<p>Alerts</p>

</div>

<div className="stat-card">

<FaCheckCircle/>

<h3>98%</h3>

<p>Compliance</p>

</div>

</div>

);

}

export default Stats;