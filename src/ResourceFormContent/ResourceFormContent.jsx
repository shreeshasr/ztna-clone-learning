import { DialogContent } from '@material-ui/core'
import React from 'react'
import AddIcon from '@material-ui/icons/Add';

function ResourceFormContent() {
    return (
        <div className="resourceFormContent">
             <DialogContent>
                 <div className="field">
                    <label for="name">Name</label>
                    <input type="text" placeholder="Resource name"/>
                </div>
                <div className="field">
                     <label style={{"margin-bottom": "0.3rem"}} for="certificate">Display icon (Max file size: 100K)</label>
                     <div className="upload-container">
                         <button>
                            <input type="file"  accept=".jpg, .jpeg, .png, .gif" className="hidden"/>
                            <span><AddIcon/> Choose</span>
                         </button>    
                     </div>
                     <label style={{"margin-bottom": "0.3rem"}} for="certificate">(W: 256px, H: 256px; Formats: .jpg, .jpeg, .png, .gif)</label>
                </div>
                 <div className="field">
                    <label for="description">Description (max of 250 characters)</label>
                    <input type="text" placeholder="Description"/>
                </div>
                <div className="field">
                    <label for="Gateway">Gateway</label>
                    <select name="GATEWAYS" disabled id="gateways">
                        <option value="Select">Select</option>
                    </select>
                </div>
                
                <div className="field">
                    <label for="Policy" className="top-label">Access method</label>
                    <div className="radios">
                        <div className="radio-and-label">
                            <input type="radio" name="depmode" checked/>
                            <label for="Deployment mode">Agent</label>
                        </div>
                        <div className="radio-and-label">
                            <input type="radio"  name="depmode"/>
                            <label for="Deployment mode">Agentless</label>
                        </div>
                    </div>
                   
                </div>
                 <div className="field">
                    <label for="External FQDN">External FQDN</label>
                    <input type="text" placeholder="External FQDN"/>
                </div>
                <div className="field">
                    <label for="Internal FQDN/IP address">Internal FQDN/IP address</label>
                    <input type="text" placeholder="Internal FQDN/IP address"/>
                </div>
                 <div className="field">
                    <label for="Resource type">Platform type</label>
                    <select name="resourcetypes" id="resourcetypes">
                        <option value="Web Application" default>Web Application</option>
                        <option value="SSH">SSH</option>
                    </select>
                </div>
                 <div className="field">
                        <label for="Access port type">Access port type</label>
                        <select name="portType" disabled id="ports">
                            <option value="Select">Select</option>
                        </select>
                        <label for="Port">Port</label>
                        <input type="text" placeholder="Port"/>
                </div>
                
     
            </DialogContent>
        </div>
    )
}

export default ResourceFormContent
