import React, { Component } from 'react';
import './App.css';
import MeteoriteLandings from './components/MeteoriteLandings';
import axios from 'axios';
import BarChart from './components/BarChart';
import { barChartData } from './utils/utils';

class App extends Component {
  state = {
    meteoriteData: [],
  }
  render() {
    const { meteoriteData } = this.state;
    return (
      <div className="App">
        <h1>Star Search</h1>
        <BarChart data={barChartData(meteoriteData)} />
        < MeteoriteLandings meteoriteData={meteoriteData} />
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
