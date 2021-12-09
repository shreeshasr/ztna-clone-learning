import React from 'react'
import AddButton from '../AddButton/AddButton'
import Columns from '../Columns/Columns'
import Header from '../Header/Header'
import MessageAndhelp from '../MessageAndHelp/MessageAndhelp';
import {NavLink} from 'react-router-dom'
import './Policy.css'
function Policy() {
    return (
        <div className="policies">
             <Header section="Policies"/>
            <div className="middle-row">
                <div className="left">
                    <AddButton name="Add policy"/>
                </div>
            </div>
            <p>Note: Policies are assigned to resources. You can assign users at the <NavLink to="/resources">resource</NavLink> level.</p>
            <p>Download Sophos Endpoint agent from the <a href="#">Downloads</a> page. <a href="#">Learn more</a></p>
            <div className="info-column">
                <h4>Zero Trust - Resource access (10) </h4>
                <div className="columns">
                    <Columns text="Name"/>
                    <Columns text="Status"/>
                    <Columns text="Resources"/>
                    <Columns text="Last modified"/>
                </div>
            </div>
            <div className="policy-list">
                <MessageAndhelp section="policy" pluralOfSection="policies"/>
            </div>
        </div>
    )
}

export default Policy
