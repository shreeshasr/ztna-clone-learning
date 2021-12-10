import { DialogContent } from '@material-ui/core'
import React from 'react'
import './PolicyFormContent.css'
function PolicyFormContent() {
    return (
        <div className="policyFormContent">
                <DialogContent>
                 <p>Note: For an agent-based policy, you need to install the Sophos Endpoint agent on your devices.</p>
                    <label for="Resource access" className="top-label">Resource access</label>
                    <div className="Policyradios">
                        <div className="radio-and-label">
                             <input type="radio" name="agent" checked/>
                            <label for="agent"><strong>Agent</strong> - This can check device health and control access to all types of resources. Download Sophos Endpoint agent from the Downloads page. Learn more</label>
                            
                        </div>
                        <div className="radio-and-label">
                            <input type="radio"  name="agent"/>
                             <label for="agentless"><strong>Agentless</strong> - This can't check device health and controls access only to web resources.</label>
                            
                        </div>
                    </div>
     
            </DialogContent>
        </div>
    )
}

export default PolicyFormContent
