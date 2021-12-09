import React from 'react'
import './IdentityProvider.css'
import Header from '../Header/Header'
import SearchBox from '../SearchBox/SearchBox'
import AddButton from '../AddButton/AddButton'
import Columns from '../Columns/Columns'
import MessageAndhelp from '../MessageAndHelp/MessageAndhelp';

function IdentityProvider() {
    return (
        <div className="idps">
             <Header section="Identity Providers"/>
            <div className="info-column">
            <div className="middle-row">
                <div className="left">
                    <AddButton name="Add identity provider"/>
                </div>
                <SearchBox/>
            </div>
            <div className="columns">
                <Columns text="Name"/>
                <Columns text="Description"/>
                <Columns text="Type"/>
                <Columns text="#Gateways"/>
                <Columns text=""/>
            </div>
            </div>
            <div className="idp-list">
                <MessageAndhelp section=" identity provider" pluralOfSection="identity providers"/>
            </div>
        </div>
    )
}

export default IdentityProvider
