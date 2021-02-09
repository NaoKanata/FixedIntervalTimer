import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anim: 0
        };
    }
    render() {
        let data = localStorage.getItem("isRunning");
        return(
            <div className="App">
                { data !== "true" ? this._renderPlay() : this._renderStop() }
            </div>
        );
    }

    _renderStop() {
        return (
            <Button variant="contained" color="primary" startIcon={<StopIcon />} onClick={this._onClick}>
                Stop
            </Button>
        );
    }

    _renderPlay() {
        return (
            <Button variant="contained" color="primary" startIcon={<PlayArrowIcon />} onClick={this._onClick}>
                START
            </Button>
        );
    }

    _onClick = () => {
        this.setState({ anim: 1 });
        let data = localStorage.getItem("isRunning");
        localStorage.setItem("isRunning", data === "true" ? "false" : "true");
    }
}

export default App;
