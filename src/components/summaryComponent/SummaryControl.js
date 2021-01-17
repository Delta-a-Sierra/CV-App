import React, {Component} from 'react';
import './summaryStyle.css'
import Input from '../generalComponents/formComponents/Input'

class SummaryControl extends Component{
    constructor(props){
        super(props)

        this.state = {
            summaryValue : "Some Text"
        }

        this.changeSummary = this.changeSummary.bind(this);
    }

    changeSummary(event){
        this.setState({
            summaryValue : event.target.value
        });
    }

    render(){
        if(this.props.mode === 'edit'){
            return(
                <div className="summary">
                    <h1>Summary</h1>
                    <form> <textarea type="text" id="summary" onChange={this.changeSummary}>{this.state.summaryValue}</textarea>  </form>
                </div>
                
            )
        }
        return(
            <div className="summary">
                <h1>Summary</h1>
                <p>{this.state.summaryValue}</p>
            </div>
        )

    }
}

export default SummaryControl