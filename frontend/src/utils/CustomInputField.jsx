import React, { useState } from 'react';


const CustomInputField = ({ min, max, placeholder, className, type, name, value, onChange }) => {

    const [focusedInput, setfocusedInput] = useState()
    
    const validateValue = inputValue => {

        if(type==='tel'){
          if (inputValue===''){
               onChange(inputValue)
           }else{
               /^[-0-9]+$/.test(inputValue) && onChange(inputValue)
           }
            
        }else{
            onChange(inputValue)
        }
    }


    return(
        <div className="input_container" 
            onMouseOver={e => setfocusedInput(e.target)}
            onMouseOut={e => setfocusedInput()}
            onFocus={(e) => setfocusedInput(e.target)}
            onBlur={() => setfocusedInput()}
        >

            <input 
                className={className}
                type={type} 
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={e => validateValue(e.target.value)}
                maxLength={max}
                minLength={min}
            />

            <div style={{width: '15%', position:'absolute', left: '0', top: '0', height: '100%'}}>
                <div style={{color: 'red'}}>*</div>
            </div>

            <div className="bottom_border">
                <div className={`bottom_border_filler ${focusedInput && focusedInput.name === name && 'filled'} ${value&&'filled not_empty'}`}/>
            </div>
        </div>
    )
}

export default CustomInputField;