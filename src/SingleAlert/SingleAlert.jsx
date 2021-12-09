import React from 'react'
import './SingleAlert.css'
function SingleAlert( {count, icon, title}) {
    const Icon = icon;
    let color;
    switch(title){
        case "High Alerts": color = "red"
        break
        case "Medium Alerts": color = "yellow"
        break
        case "Low Alerts": color = "grey"
        break
        default: color = "blue"
        break
    }
    return (
        <div className={`single-alert ${color}`}>
            <h2>{count}</h2>
            <div className="bottom">
                <Icon/>
                <h5>{title}</h5>
            </div>
        </div>
    )
}

export default SingleAlert
