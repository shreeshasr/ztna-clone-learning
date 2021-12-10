import React from 'react'
import Header from '../Header/Header'
import './Settings.css'
function Settings() {
    return (
             <div className="settings">
             <Header section="Settings"/>
            <div className="setings-middle-row">
                    <div className="buttons">
                        <div className="add-button">
                            <button>Save</button>
                        </div>
                        <div className="cancel-button">
                            <button style={{"background": "#FFFFFF", "color": "#055BB5"}}>Cancel</button>
                        </div>
                    
                </div>
            </div>
            <div className="settingsContent">
                <div className="settingsHeading">Sophos support for gateway instance</div>
                <p>You can give Sophos support access to a gateway instance for troubleshooting. This support token expires after a fixed time.</p>
                <label className="topLabel" for="Token expiration">Token expiration <span className="tooltip">&#8505;
                    <span className="tooltiptext">Admin can turn on token for each gateway instance</span>
                </span></label>
                
                <select name="tokens" id="tokens">
                    <option value="1 day" default>1 day</option>
                    <option value="2 days">2 days</option>
                    <option value="5 days">5 days</option>
                    <option value="7 days">7 days</option>
                    <option value="14 days">14 days</option>
                    <option value="30 days">30 days</option>
                </select>
                <div className="settingsHeading">Minimum time before device health triggers a rule</div>
                <p>Set the minimum time before a device's security health triggers a rule in an access policy. This can prevent ZTNA from acting too quickly if there's a temporary issue.</p>
                <label className="topLabel" for="Minimum duration">Minimum duration</label>
                <input className="duration" type="text" value="0"></input>
                <label for="Minimum duration">seconds</label>
            </div>
            
            
        </div>
    )
}

export default Settings
