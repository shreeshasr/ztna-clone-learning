import { DialogContent } from '@material-ui/core'
import React from 'react'
import './IdpFormContent.css'
function IdpFormContent() {
    return (
        <div>
             <DialogContent>
                 <div className="field">
                    <label for="name">Name</label>
                    <input type="text" placeholder="Identity provider"/>
                </div>
                 <div className="field">
                    <label for="description">Description (max of 250 characters)</label>
                    <input type="text" style={{"height": "1.5rem"}} placeholder="Description"/>
                </div>
                 <div className="field">
                    <label for="Platform type">Platform type</label>
                    <select name="platforms" style={{"width": "45%"}} id="platformid">
                        <option value="Azure" default>Azure AD</option>
                        <option value="Okta">Okta</option>
                    </select>
                </div>
                <div className="line"/>
                <label for="configure-ad" className="top-label">Configure Azure Sync settings
                </label>
                <div className="field">
                    <label for="Client ID">Client ID</label>
                    <input type="text" placeholder="Client ID"/>
                </div>
                 <div className="field">
                    <label for="Tenant ID">Tenant ID</label>
                    <input type="text" placeholder="Tenant ID"/>
                </div>
                 <div className="field">
                    <label for="Client Secret">Client Secret</label>
                    <input type="text" placeholder="Client Secret"/>
                </div>
     
                <label for="test connection" className="top-label">Validate Azure Sync connection</label>
                <div className="test-connection">
                    <div className="add-button">
                        <button>Test connection</button>
                    </div>
                </div>
               
            </DialogContent>
        </div>
    )
}

export default IdpFormContent
