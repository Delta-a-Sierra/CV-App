import React, {Component} from 'react';
import HeaderPreview from './HeadingPreview'
import HeaderEdit from './HeadingEdit'
import ModeToggle from './modeToggle/ModeToggle';


class HeaderControl extends Component{
    constructor(props){
        super(props)

        this.state = {
            mode: 'preview',
            firstName: "First Name",
            lastName: "Last Name",
            jobTitle: "Job Title"
        }

        this.previewMode = this.previewMode.bind(this);
        this.editMode = this.editMode.bind(this);
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

    previewMode(event){
        event.preventDefault()
        this.setState({
            mode : "preview"
        });
    };

    
    editMode(event){
        event.preventDefault()
        this.setState({
            mode : "edit"
        });
    };

    render(){

        let {firstName, lastName, jobTitle, mode} = this.state
        let header;

        if(mode === 'preview'){
            header = <HeaderPreview firstName={firstName} lastName={lastName} jobTitle={jobTitle}/>
        }else{
            header = <HeaderEdit  firstName={firstName} lastName={lastName} jobTitle={jobTitle}
             changeFirstName={this.changeFirstName} changeLastName={this.changeLastName} changeJobTitle={this.changeJobTitle}/>
        }

        return(
            <div>
                <ModeToggle mode={mode} previewMode={this.previewMode} editMode={this.editMode}/>
                {header}
            </div>
        );
    }

}

export default HeaderControl