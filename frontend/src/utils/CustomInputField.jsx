import React, { useState } from 'react';


const CustomInputField = ({ placeholder, className, type, name, value, onChange }) => {

    const [focusedInput, setfocusedInput] = useState()

    return(
        <div className="input_container" 
            onFocus={(e) => setfocusedInput(e.target)}
            onBlur={() => setfocusedInput()}
        >

            <input 
                
                autoComplete="false"
                className={className}
                type={type} 
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
            />

            <div className="icon" style={{width: '15%', position:'absolute', right: '0', top: '0', height: '100%'}}>
                <div style={{color: 'red'}}>*</div>
            </div>

            <div className="bottom_border">
                <div className={`bottom_border_filler ${focusedInput&&focusedInput.name===name&& 'filled'}`}/>
            </div>
        </div>
    )
}

export default CustomInputField;