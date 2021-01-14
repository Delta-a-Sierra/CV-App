import React, {Component} from 'react';
import './FormStyles/inputStyle.css'


class Input extends Component{
    constructor(props){
        super(props);

        this.inputChange = this.inputChange.bind(this);
        this.state = {
            value: this.props.value
        }
    }

    inputChange(event){
        this.setState({
            value : event.target.value
        })

        this.props.onKeyPress(event) 
    }


    render(){
        let {formId, type} = this.props;
        return(
            <div>
                <label htmlFor={formId}>
                    <input type={type} value={this.state.value} required id={formId} onChange={this.inputChange} ></input>
                    <span className='error hidden'>Error Message</span>
                </label>
            </div>
        );
    };
};

export default Input;