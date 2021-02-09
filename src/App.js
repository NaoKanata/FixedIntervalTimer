import React from 'react';
import './App.css';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import Slider from '@material-ui/core/Slider';

const marks = [
    {
      value: 5,
      label: '5 min',
    },
    {
      value: 10,
      label: '10 min',
    },
    {
      value: 15,
      label: '15 min',
    },
    {
        value: 20,
        label: '20 min',
    },
    {
        value: 30,
        label: '30 min',
    },
    {
        value: 60,
        label: '60 min',
    },
    {
        value: 120,
        label: '120 min',
    },
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRunning: localStorage.getItem("isRunning") === "true",
        };
        setInterval(() => {
            let data = localStorage.getItem("isRunning");
            this.setState({ isRunning: data === "true" });
        }, 100);
    }
    render() {
        return(
            <div className="App">
                <p>Running</p>
                <FormControlLabel
                    control={<Switch checked={this.state.isRunning} onChange={this._onClick} name="checkedA" />}
                    label={this.state.isRunning?"ON":"OFF"}
                />
                <p>Interval Time</p>
                <div class="SliderContainer">
                    <Slider
                        defaultValue={20}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={5}
                        marks={marks}
                        min={5}
                        max={120}
                        onChange={this._changeValue}
                    />
                </div>
            </div>
        );
    }

    _changeValue = (event, newValue) => {
        localStorage.setItem("interval", newValue);
    }

    _onClick = () => {
        let data = localStorage.getItem("isRunning");
        localStorage.setItem("isRunning", data === "true" ? "false" : "true");
        this.setState({ isRunning: data !== "true" });
    }
}

export default App;
