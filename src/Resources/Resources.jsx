import React from 'react'
import Header from '../Header/Header'
import SearchBox from '../SearchBox/SearchBox'
import AddButton from '../AddButton/AddButton'
import './Resources.css'
import Columns from '../Columns/Columns'
import MessageAndhelp from '../MessageAndHelp/MessageAndhelp';

function Resources() {
    return (
        <div className="resources">
            <Header section="Resources & Access"/>
            <div className="info-column">
            <div className="middle-row">
                <div className="left">
                    <AddButton name="Add resource"/>
                </div>
                <SearchBox/>
            </div>
            <div className="columns">
                <Columns text="Name"/>
                <Columns text="Gateway"/>
                <Columns text="External FQDN"/>
                <Columns text="internal FQDN/IP"/>
                <Columns text="Port"/>
                <Columns text="Resource type"/>
            </div>
            </div>
            <div className="resource-list">
                <MessageAndhelp section="resource" pluralOfSection="resources"/>
            </div>
        </div>
    )
}

export default Resources
