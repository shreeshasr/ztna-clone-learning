import React from 'react'
import './Sidebar.css'
import SidebarOption from '../SidebarOption/SidebarOption'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import StarsIcon from '@material-ui/icons/Stars';
import TimelineIcon from '@material-ui/icons/Timeline';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import AppsIcon from '@material-ui/icons/Apps';
import PolicyIcon from '@material-ui/icons/Policy';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import SettingsIcon from '@material-ui/icons/Settings';
import { NavLink, BrowserRouter } from 'react-router-dom';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
              <img src="https://cloud-assets.sophos.com/assets/a4a1a12be03d005c1dc8aae6c3a7b8b63fd23045/images/sophos-central-admin-white.png" alt="central"/>
            </div>
            
            <SidebarOption icon={StarsIcon} option="Zero Trust Network Access"/>
            <div className="back-to-overview">
                <ArrowLeftIcon/>
                <h5>Back to Overview</h5>
            </div>
            <div className="nav-options">
                <NavLink to='/dashboard'><SidebarOption icon={TimelineIcon} option="Dashboard"/></NavLink>
                <NavLink to='/reports'><SidebarOption icon={InsertChartIcon} option="Reports"/></NavLink>
                <div className="divider"></div>
                <NavLink to='/gateways'><SidebarOption icon={MeetingRoomIcon} option="Gateways"/></NavLink>
                <NavLink to='/resources'><SidebarOption icon={AppsIcon} option="Resources & Access"/></NavLink>
                <div className="divider"></div>
                <NavLink to='/policies'><SidebarOption icon={PolicyIcon} option="Policies"/></NavLink>
                <NavLink to='/identityproviders'><SidebarOption icon={VpnKeyIcon} option="Identity Providers"/></NavLink>
                <NavLink to='/settings'><SidebarOption icon={SettingsIcon} option="Settings"/></NavLink>
            </div>
        </div>
    )
}

export default Sidebar
