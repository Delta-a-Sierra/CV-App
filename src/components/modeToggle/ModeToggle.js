import React, {Component} from 'react';

class ModeToggle extends Component{

    constructor(props){
        super(props)

        this.state = {
            mode: this.props.mode
        }
    } 

    render(){
        return(
            <div>
                <button onClick={this.props.previewMode}>Preview</button>
                <button onClick={this.props.editMode}>Edit</button>
            </div>
            
        )
    }
}
export default ModeToggle