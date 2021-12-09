import { DialogContent } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import React from 'react'
import './GatewayFormContent.css'
function FormContent() {
    return (
        <div>
             <DialogContent>
                 <div className="field">
                    <label for="name">Name</label>
                    <input type="text" placeholder="Gateway name"/>
                </div>
                 <div className="field">
                    <label for="location">Location</label>
                    <input type="text" placeholder="Location"/>
                </div>
                 <div className="field">
                    <label for="description">Description (max of 250 characters)</label>
                    <input type="text" placeholder="Description"/>
                </div>
                 <div className="field">
                    <label for="fqdn">FQDN</label>
                    <input type="text" placeholder="FQDN"/>
                </div>
                 <div className="field">
                    <label for="domain">Domain</label>
                    <input type="text" placeholder="Domain"/>
                </div>
                 <div className="field">
                    <label for="Platform type">Platform type</label>
                    <select name="platforms" id="platformid">
                        <option value="VMWARE" default>VMWARE ESxi</option>
                        <option value="AWS">Amazon Web Services</option>
                    </select>
                </div>
                 <div className="field">
                    <label for="Identity provider">Identity provider</label>
                    <select name="idps" disabled id="idpid">
                        <option value="Select">Select</option>
                    </select>
                </div>
                <div className="line"/>
                <label for="Gateway instance" className="top-label">Gateway instance</label>
                <div className="field">
                    <label for="Deployment mode label">Deployment mode</label>
                    <div className="radios">
                        <div className="radio-and-label">
                            <input type="radio" name="depmode" checked/>
                            <label for="Deployment mode">One-arm</label>
                        </div>
                        <div className="radio-and-label">
                            <input type="radio"  name="depmode"/>
                            <label for="Deployment mode">Two-arm</label>
                        </div>
                    </div>
                   
                </div>
                <label for="Interface settings" className="top-label">Interface settings</label>
                <div className="field">
                    <label for="IP address">IP address </label>
                    <div className="radios">
                        <div className="radio-and-label">
                            <input type="radio" name="iptype" checked/>
                            <label for="iptype">DHCP</label>
                        </div>
                        <div className="radio-and-label">
                            <input type="radio" name="iptype"/>
                            <label for="iptype">Static IP</label>
                        </div>
                    </div>
                   
                </div>

                <div className="line"/>
                <label for="Certificate" className="top-label">Certificate</label>
                <div className="field">
                     <label style={{"margin-bottom": "0.3rem"}} for="certificate">Upload certificate</label>
                     <div className="upload-container">
                         <button>
                            <input type="file"  accept=".pem,.crt,.cer" className="hidden"/>
                            <span><AddIcon/> Choose</span>
                         </button>
                        
                     </div>
                </div>
     
                <div className="field">
                     <label style={{"margin-bottom": "0.3rem"}} for="privatekey">Upload private key</label> 
                     <div className="upload-container">
                         <button>
                            <input type="file" accept=".pem,.crt,.cer" className="hidden"/>
                            <span><AddIcon/> Choose</span>
                         </button>
                        
                     </div>
                </div>
     
            </DialogContent>
        </div>
    )
}

export default FormContent
