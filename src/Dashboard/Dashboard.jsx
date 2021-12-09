import React from 'react'
import Header from '../Header/Header'
import './Dashboard.css'
import Alerts from '../Alerts/Alerts'
import TopApps from '../TopApps/TopApps'
function Dashboard() {
    return (
        <div className="dashboard">
            <Header section="Dashboard"/>
            <Alerts/>
            <TopApps/>
        </div>
    )
}

export default Dashboard
