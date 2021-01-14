import React, {Component} from 'react';
import HeaderPreview from './HeadingPreview'
import HeaderEdit from './HeadingEdit'


class HeaderControl extends Component{
    constructor(props){
        super(props)

        this.state = {
            mode: 'edit',
            firstName: "Dwayne",
            lastName: "Sutherland",
            jobTitle: "Front End Dev"
        }
    }

    render(){

        const mode = this.state.mode
        let {firstName, lastName, jobTitle} = this.state
        let header;

        if(mode === 'preview'){
            header = <HeaderPreview firstName={firstName} lastName={lastName} jobTitle={jobTitle}/>
        }else{
            header = <HeaderEdit firstName={firstName} lastName={lastName} jobTitle={jobTitle}/>
        }

        return(
            <div>
                {header}
            </div>
        );
    }

}

export default HeaderControl