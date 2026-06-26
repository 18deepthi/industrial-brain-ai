import {
FaExclamationTriangle,
FaTools,
FaClipboardCheck,
FaLightbulb
} from "react-icons/fa";

function Insights(){

const insights=[

{
title:"Repeated Pump Failure",
icon:<FaTools/>,
color:"#ef4444"
},

{
title:"Inspection Overdue",
icon:<FaClipboardCheck/>,
color:"#f59e0b"
},

{
title:"Safety Compliance Gap",
icon:<FaExclamationTriangle/>,
color:"#3b82f6"
},

{
title:"AI Maintenance Recommendation",
icon:<FaLightbulb/>,
color:"#22c55e"
}

];

return(

<div className="insights-card">

<h3>

⚠ AI Insights

</h3>

<div className="insights-list">

{

insights.map((item,index)=>(

<div
className="insight"
key={index}
>

<div
className="insight-icon"
style={{
background:item.color
}}
>

{item.icon}

</div>

<span>

{item.title}

</span>

</div>

))

}

</div>

</div>

);

}

export default Insights;