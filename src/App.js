import React, { Component} from 'react';
import HeaderControl from './components/headingComponents/HeadingControl'
import './appStyle/appStyle.css'

class App extends Component{

  render(){
    return (
      <div className="app">
        <HeaderControl />
        <div className="cvBody">
          
        </div>
      </div>
    );
  };
}

export default App;
