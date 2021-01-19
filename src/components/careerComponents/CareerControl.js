import React, { Component } from 'react';
import './careerStyle.scss'

class CareerControl extends Component {

    constructor(props) {
        super(props)

        this.state = {
            companyName : "Company Name",
            startDate : "2016",
            endDate : "Present",
            jobDescription : "Job Description"
        }

        this.changeCompanyName = this.changeCompanyName.bind(this)
        this.changeStartDate = this.changeStartDate.bind(this)
        this.changeEndDate = this.changeEndDate.bind(this)
        this.changeDescription = this.changeDescription.bind(this)
    }

    changeCompanyName(events){
        this.setState({
            companyName : events.target.value
        })
    }

    changeStartDate(events){
        this.setState({
            startDate : events.target.value
        })
    }

    changeEndDate(events){
        this.setState({
            endDate : events.target.value
        })
    }

    changeDescription(events){
        this.setState({
            jobDescription : events.target.value
        })
    }


    render() {



        const {            jobDescription, startDate, endDate, companyName} = this.state


        if (this.props.mode === 'edit') {
            return (
                <div className="careerHistory">
                    <h1>Career History</h1>
                    <div className="container">
                        <div className="dates">
                            <input type="text" value={endDate} onChange={this.changeEndDate}  required></input>
                            <input type="text" value={startDate} onChange={this.changeStartDate}  required></input>
                        </div>
                        <div className="description"> 
                            <div className="jobTitle">
                                <h3>Job Title</h3>
                                <input className="CompanyName" type="text" value={companyName} onChange={this.changeCompanyName} required></input>
                            </div>
                            <div>
                                <textarea onChange={this.changeDescription} >{jobDescription}</textarea>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="careerHistory">
                <h1>Career History</h1>
                <div className="container">
                    <div className="dates">
                        <p>{endDate}</p>
                        <p>{startDate}</p>
                    </div>
                    <div className="description">
                        <div className="jobTitle">
                            <h3>Job Title</h3>
                            <h4 className="CompanyName">{companyName}</h4>
                        </div>
                        <div>
                            <p>{jobDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CareerControl