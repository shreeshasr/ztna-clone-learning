import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';

function Header( {section} ) {
    return (
        <div className="header">
             <h1>Zero Trust Network Access - {section}</h1>
            
            {section === "Dashboard" ?
            <div>
                <NavLink to="#">
                    <span>Overview</span>
                </NavLink>
                 <span> / </span>
                <span>Zero Trust Network Access {section}</span>
            </div>
             :
            <div>
                <NavLink to="#">
                    <span>Overview</span>
                </NavLink>
                 <span> / </span>
                <NavLink to="/dashboard">
                <span>Zero Trust Network Access Dashboard</span>
                </NavLink>
                <span> / </span>
                <span>{section}</span>
            </div>
            }
        </div>
            
    )
}

export default Header
