import React from 'react';
import './App.css';
import axios from 'axios';
import Covid from './Covid.js';
import Background from './Background.js';

class App extends React.Component {

  constructor(){
    super();
    this.state = { 
      name: "covid",
      data:{}
    };
  }
    componentDidMount() {
      var self = this;
      this.setState({ name: "covid" });
      axios.get("https://covid19.th-stat.com/api/open/today")
      .then(function(response){
      console.log(response.data);
      self.setState({data:response.data});
      
      },
      function(error){
      console.log(error);
      })
      }
  
  render() {
      return (
          <div>
            <Covid data = {this.state.data} />
            <Background/>
          </div>
      )
  }
}
export default App;