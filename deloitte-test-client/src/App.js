import React, { Component } from 'react';
import './App.css';
import './components/autocomplete';
import AutoComplete from './components/autocomplete';
import Results from './components/results';

// function App() {
  class App extends Component{
  state={
    Employees:[]
  };

render() { 
  return (
    <div className="App">
      <h1>Looking for an Employee?</h1>
      <h4>Click on the search bar to learn our suggestions</h4>
      <AutoComplete getEmployees={(result) => {
        console.log(result);
              this.setState({
                Employees: result.map((value, i) => {
                  return (
                    <li id={value.WorkerID} key={value.WorkerID}>
                            <img src={value.ImageUrl} alt=""></img>
                            <div className="name">{value.Name}</div>
                            <div className="workTitle">{value.WorkTitle}</div>
                    </li>
                  );
              })});
            }}></AutoComplete>
      <Results value={this.state.Employees}></Results>
    </div>
  );
}
  }
export default App;
