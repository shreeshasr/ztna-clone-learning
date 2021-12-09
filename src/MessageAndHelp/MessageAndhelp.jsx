import React from 'react'
import './MessageAndHelp.css'
function MesssageAndhelp( {section, pluralOfSection}) {
    return (
        <div className="message-help">
            <p>You have not added any {pluralOfSection}.</p>
            <p>Click the 'Add {section}' button to add a {section}</p>
        </div>
    )
}

export default MesssageAndhelp
