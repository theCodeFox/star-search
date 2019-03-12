import React, { Component } from 'react';
import './App.css';
import MeteoriteLandings from './components/MeteoriteLandings';
import axios from 'axios';
import BarChart from './components/BarChart';
import BubbleChart from './components/BubbleChart';
import DropdownBox from './components/Dropdown';

class App extends Component {
  state = {
    meteoriteData: [],
    chartType: 'bubble'
  }
  render() {
    const { meteoriteData } = this.state;
    return (
      <div className="App">
        <h1>Star Search</h1>
        <DropdownBox handleSelect={this.handleSelect} />
        <br></br>
        {(this.state.chartType === 'bubble') &&<BubbleChart meteoriteData={meteoriteData} />}
        {(this.state.chartType === 'bar') && <BarChart meteoriteData={meteoriteData} />}
        <div className="scroll meteoriteLandings">< MeteoriteLandings meteoriteData={meteoriteData} /></div>
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

  handleSelect = (event) => {
    const selectedChart = event.target.value;
    this.setState({chartType: selectedChart})
  }

}

export default App;
