import React from "react";
import './styles/input.css';

const Input = ({type,placeholder,width,onChange,value }) => {
    const Style  = {
        width: width || 'auto',
    };
    return(
        <div className="input-container">
            <input className='input bg-none Body' style={Style} type={type} placeholder={placeholder} onChange={onChange} value={value}/>
        </div>
    )
};
export default Input;