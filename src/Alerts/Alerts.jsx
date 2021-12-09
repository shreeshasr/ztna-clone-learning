import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ReportIcon from '@material-ui/icons/Report';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import InfoIcon from '@material-ui/icons/Info';
import SingleAlert from '../SingleAlert/SingleAlert';
import './Alerts.css'
function Alerts() {
    return (
        <div className="alerts">
            <SingleAlert count="27" icon={NotificationsIcon} title="Total Alerts"/>
            <SingleAlert count="27" icon={ReportIcon} title="High Alerts"/>
            <SingleAlert count="0" icon={ReportProblemIcon} title="Medium Alerts"/>
            <SingleAlert count="0" icon={InfoIcon} title="Low Alerts"/>
        </div>
    )
}

export default Alerts
