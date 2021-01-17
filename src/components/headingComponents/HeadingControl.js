import React, {Component} from 'react';
import HeaderPreview from './HeadingPreview'
import HeaderEdit from './HeadingEdit'


class HeaderControl extends Component{
    constructor(props){
        super(props)

        this.state = {
            firstName: "First Name",
            lastName: "Last Name",
            jobTitle: "Job Title"
        }

        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeJobTitle = this.changeJobTitle.bind(this)
    }

    changeFirstName(event){
        this.setState({
            firstName: event.target.value
        })
    }

    changeLastName(event){
        this.setState({
            lastName: event.target.value
        })
    }

    changeJobTitle(event){
        this.setState({
            jobTitle: event.target.value
        })
    }

    render(){
        let mode = this.props.mode
        let {firstName, lastName, jobTitle} = this.state
        let header;

        if(mode === 'preview'){
            header = <HeaderPreview firstName={firstName} lastName={lastName} jobTitle={jobTitle}/>
        }else{
            header = <HeaderEdit  firstName={firstName} lastName={lastName} jobTitle={jobTitle}
             changeFirstName={this.changeFirstName} changeLastName={this.changeLastName} changeJobTitle={this.changeJobTitle}/>
        }

        return(
            <div>
                {header}
            </div>
        );
    }

}

export default HeaderControl