import React, { Component } from 'react';
import './App.css';
import MeteoriteLandings from './components/MeteoriteLandings';
import axios from 'axios';
import BarChart from './components/BarChart';
import DonutChart from './components/DonutChart';

class App extends Component {
  state = {
    meteoriteData: [],
  }
  render() {
    const { meteoriteData } = this.state;
    return (
      <div className="App">
        <h1>Star Search</h1>
        <DonutChart meteoriteData={meteoriteData} />
        < MeteoriteLandings meteoriteData={meteoriteData} />
        <BarChart meteoriteData={meteoriteData} />
      </div>
    );
  }

  componentDidMount = () => {
    const url = 'https://data.nasa.gov/resource/y77d-th95.json';
    axios.get(url)
      .then(({ data }) => {
        this.setState({ meteoriteData: data })
      })
  }

}

export default App;
