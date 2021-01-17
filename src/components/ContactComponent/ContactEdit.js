import React, {Component} from 'react';
import './ContactStyle.css';
import Input from '../generalComponents/formComponents/Input';

function ContactEdit(props){
    if(props.mode === 'preview'){
        return(
            <div className="contact">
                
                <i class="material-icons">mail</i>
                <Input type="text" formID={props.type} value={props.value}/>
            </div>
        )
    }
    return(
        <div className="contact">
            <i class="material-icons">mail</i>
            <p>{props.value} stuff</p>
        </div>
    )
}

export default ContactEdit