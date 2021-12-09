import React from 'react'
import './Columns.css'
function Columns( {text, isComponent=false} ) {
    const Icon = text;
    return (
        <div className="single-column">
            {isComponent ? <Icon/> : text}
        </div>
    )
}

export default Columns
