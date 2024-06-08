import React from "react";
import '../components/styles/contactUs.css';

const ContactUs = (props) => {

    return(
        <div className='ContactUs bg-light50 tx-green'>
            <img className='CardImg' src={props.card.image} alt=''/>
            <b className='CardTitle Caption Caption-no-spacing'>
                {props.card.title}
            </b>
            <p className='CardText Body'>
                {props.card.content1}<br/>{props.card.content2}
            </p>
        </div>
    );
};

export default ContactUs;
