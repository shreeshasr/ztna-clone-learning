import React from 'react'
import './SidebarOption.css'

function SidebarOption( {icon, option}) {
    const Icon = icon;
    return (
        <div className="options">
            <Icon/>
            <h5>{option}</h5>
        </div>
    )
}

export default SidebarOption
