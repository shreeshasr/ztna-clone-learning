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
import { NavLink } from 'react-router-dom';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
              <img src="https://cloud-assets.sophos.com/assets/ba5d94eeee2a6b917e6df5194adf2029b138f0cb/customer/96d61dd5220f3e5bf0d7a1f3d5be3c9f.png" alt="central"/>
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
