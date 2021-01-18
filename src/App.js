import React, { Component} from 'react';
import HeaderControl from './components/headingComponents/HeadingControl'
import SummaryComponent from './components/summaryComponent/SummaryControl'
import ContactControl from './components/ContactComponent/ContactControl'
import ModeToggle from './components/modeToggle/ModeToggle';
import './appStyle/appStyle.scss'
import CareerControl from './components/careerComponents/CareerControl';

class App extends Component{
  constructor(props){
    super(props)

    this.state=({
      mode: 'preview'
    })

    this.previewMode = this.previewMode.bind(this);
    this.editMode = this.editMode.bind(this);


  }

  editMode(event){
    event.preventDefault()
    this.setState({
        mode : "edit"
    });
  };

  previewMode(event){
    event.preventDefault()
    this.setState({
        mode : "preview"
    });
  };

  render(){
    return (
      <div className="app">
        <ModeToggle mode={this.state.mode} previewMode={this.previewMode} editMode={this.editMode}/>
        <HeaderControl mode={this.state.mode} />
        <div className="cvBody">
          <SummaryComponent mode={this.state.mode}/>
          <div>
            <ContactControl mode={this.state.mode}/>
          </div>
          <CareerControl mode={this.state.mode} />

          
        </div>
      </div>
    );
  };
}

export default App;
