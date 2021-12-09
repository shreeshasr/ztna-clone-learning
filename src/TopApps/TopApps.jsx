import React from 'react'
import './TopApps.css'
function TopApps() {
    return (
        <div className="top-apps">
            <h5>Last 24 hours</h5>
            <div className="table">
                <h4>Top 5 apps by data transfer</h4>
                <div className="heading">
                    <h5>Resource</h5>
                    <h5>Total bytes (MB)</h5>
                </div>
                <h6>No data available</h6>
            </div>
        </div>
    )
}

export default TopApps
