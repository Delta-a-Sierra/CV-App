import React, {Component} from 'react';
import './ContactStyle.css';
import Input from '../generalComponents/formComponents/Input';


function ContactPreview(props){
    if(props.mode === 'edit'){
        return(
            <div className="contact">
                <img src={props.image} />   
                <Input type="text" formID={props.type} value={props.value}/>
            </div>
        )
    }
    return(
        <div className="contact">
            <img src={props.image} />
            <p>{props.value}</p>
        </div>
    )
}

export default ContactPreview