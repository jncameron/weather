import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CityResult from './components/CityResult';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      citySearch: "",
      results: {},
      temp: ""


    }
  }

  fetchResults = (city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9c1957636a665d7fc170405147fcc72a&units=metric`)
    .then(res => res.json())
    .then(
      city => this.setState({results: city, temp: city.main.temp})
      )
  }

  onSubmitSearch = (value) => {
    this.setState({citySearch: value});
    this.fetchResults(value);
  }

  render() {
    return (
      <div className="App">
        <Header onSubmitSearch={this.onSubmitSearch}/>
        <CityResult results={this.state.results} temp={this.state.temp}/>
      </div>
    )
  }
}

export default App;
