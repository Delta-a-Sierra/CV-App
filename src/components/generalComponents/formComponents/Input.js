import React, {Component} from 'react';
import './FormStyles/inputStyle.css'


class Input extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {formId, type, value} = this.props;
        return(
            <div>
                <label for={formId}>
                    <input type={type} value={value} required id={formId}></input>
                    <span className='error hidden'>Error Message</span>
                </label>
            </div>
        );
    };
};

export default Input;