import React, {Component} from 'react';
import './style/heading.css'
import Input from '../generalComponents/formComponents/Input.js'


class HeaderEdit extends Component{

    render(){

        let {firstName, lastName, jobTitle} = this.props
        
    
        return(
            <form className='heading'>
                <div className="container">
                    <Input type="text" formId="firstName" value={firstName} onKeyPress={this.props.changeFirstName}/>
                    <div className="avatar"></div>
                    <Input type="text" formId="firstName" value={lastName} onKeyPress={this.props.changeLastName}/>
                </div>
                <Input type="text" formId="jobTitle" value={jobTitle} onKeyPress={this.props.changeJobTitle}/>
            </form>
        );
    };
};

export default HeaderEdit;