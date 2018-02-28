import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            minutes: 3,
            totalSeconds: 0,
            secondsDisplayed: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.tick = this.tick.bind(this);
        this.timerOn = this.timerOn.bind(this);
        this.timerFinished = this.timerFinished.bind(this);
    }
    
    handleChange(e) {
        this.setState({minutes: e.target.value});
    }
    
    handleClick() {
        console.log(this.state.minutes);
        this.setState({
            totalSeconds: this.state.minutes * 60
        });
        // begin button disappears -- install/learn how to use classnames package
        this.timerID = setInterval(() => {
            this.tick();
            console.log(this.state.totalSeconds);
        }, 1000);
        // you can start typing
    }
    
    componentWillMount() {
        this.timerID = setInterval(() => {
            this.tick();
            console.log(this.state.totalSeconds);
        }, 1000);
        if(this.state.totalSeconds === 0) {
            this.componentWillUnMount;
        }
    }
    
    componentWillUnMount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
            totalSeconds: this.state.totalSeconds - 1
        });

    }
    
    
    render() {
        return (
            <div>
                    Rant to your heart's content for 
                        <input 
                            onChange={this.handleChange}
                            value={this.state.minutes} // don't let it go below 0
                            id='minutes' 
                            type='number' 
                            step='1'
                            min='1'
                        />
                    minutes, then watch all your worries disappear...
                    <span id="countdown">{this.state.minutes}:{this.state.secondsDisplayed}!</span>
                    <button id={this.buttonId} onClick={this.handleClick}>Begin!</button>
                <textarea id="text" defaultValue="Click begin to start">
                
                </textarea>
            </div>
        );
    }
}