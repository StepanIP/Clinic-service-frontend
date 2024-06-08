import React from "react";
import './styles/button.css';
import '../assets/typography.css';
const ButtonV1 = ({onClick,title,width}) => {
    const buttonStyles  = {
        width: width || 'auto',
    };
    return(
        <div className='Button-text-1'>
            <button className='button V1 tx-white bg-green' style={buttonStyles} onClick={onClick}>{title}</button>
        </div>
    );
};
const ButtonV2 = ({onClick,title,width}) => {
    const Style  = {
        width: width || 'auto',
    };
    return(
        <div className='Button-text-1 '>
            <button className='button V2 tx-green bg-none' style={Style} onClick={onClick}>{title}</button>
        </div>
    );
};
const ButtonBigLink = ({onClick,title}) => {
    return(
        <div>
            <button className='Button-text-link-1 ' onClick={onClick}>{title}</button>
        </div>
    );

}
const ButtonSmallLink = ({onClick,title}) => {
    return(
        <div>
            <button className='Button-text-link-2' onClick={onClick}>{title}</button>
        </div>
    );

}
export {ButtonV1, ButtonV2, ButtonBigLink, ButtonSmallLink};