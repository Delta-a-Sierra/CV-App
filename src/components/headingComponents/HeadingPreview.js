import React, {Component} from 'react';
import './style/heading.css'


class HeaderPreview extends Component{


    render(){
        return(
            <div>
                <div className='heading'>
                    <div className="container">
                        <h1>{this.props.firstName}</h1>
                        <div className="avatar"></div>
                        <h1>{this.props.lastName}</h1>
                    </div>
                    <h2>{this.props.jobTitle}</h2>
                </div>
            </div>
        );
    };
};

export default HeaderPreview;