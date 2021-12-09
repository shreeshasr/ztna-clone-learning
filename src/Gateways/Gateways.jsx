import React from 'react'
import AddButton from '../AddButton/AddButton'
import Columns from '../Columns/Columns'
import Header from '../Header/Header'
import SearchBox from '../SearchBox/SearchBox'
import InfoIcon from '@material-ui/icons/Info';
import './Gateways.css'
import MessageAndhelp from '../MessageAndHelp/MessageAndhelp'

function Gateways() {
    return (
        <div className="gateways">
            <Header section="Gateways"/>
            <div className="info-column">
            <div className="middle-row">
                <div className="left">
                    <AddButton name="Add gateway"/>
                    <a href="https://www.sophos.com/Pages/DownloadRedirect.aspx?downloadKey=CCFE1A32-B4E7-4D6F-9A95-892DA3F89F66" download target="_blank">
                    Download gateway VM
                    </a>
                </div>
                <SearchBox/>
            </div>
            <div className="columns">
                <Columns text={InfoIcon} isComponent="true"/>
                <Columns text="Name"/>
                <Columns text="Status"/>
                <Columns text="FQDN"/>
                <Columns text="Type"/>
                <Columns text="Version"/>
            </div>
            </div>
            <div className="gateway-list">
                <MessageAndhelp section="gateway" pluralOfSection="gateways"/>
            </div>
           
        </div>
    )
}

export default Gateways
