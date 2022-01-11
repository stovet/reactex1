import React, { useState } from 'react';
import './Switch.css';

function Switch() {
    const [switchActive, setSwitchActive] = useState<boolean>(false);
    let addBlue = "";
    let text = "";
    let bool = false;
    if(switchActive){
        addBlue = "blue";
        text = "OFF";
    } else {
        text = "ON";
        bool = true;
    }
    return (
        <div className={"Switch " + addBlue}>
            
            <h2>Switch</h2>
            {switchActive ? 
                <p>ON</p> :
                <p>OFF</p>
            }
            {
                switchActive ? 
                <button onClick={() => setSwitchActive(false)}>Turn Off</button>:
                <button onClick={() => setSwitchActive(bool)}>Turn On</button>
            }
            {/* <button onClick={() => setSwitchActive(bool)}>Turn {text}</button> */}
            {/* <button onClick={() => setSwitchActive(false)}>Off</button> */}
        </div>
    );
}

export default Switch;