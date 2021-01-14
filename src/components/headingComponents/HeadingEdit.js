import React, {Component} from 'react';
import './style/heading.css'
import Input from '../generalComponents/formComponents/Input.js'


class HeaderEdit extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <form className='heading'>
                    <div className="container">

                        <Input type="text" formId="firstName" value="Dwayne"/>

                        <div className="avatar"></div>
                        <Input type="text" formId="lastName" value="Sutherland"/>
                    </div>
                    <Input type="text" formId="jobTitle" value="Front End Developer"/>
                </form>
            </div>
        );
    };

};

export default HeaderEdit;