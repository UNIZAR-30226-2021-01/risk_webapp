import React, { Component } from 'react'
import Button from './Button'

var ws = new WebSocket('wss://fathomless-ridge-74437.herokuapp.com/ws');

export default class Counter extends Component {

	constructor(props) {
		super(props);
		this.state = {counter: 0};
	}

	componentDidMount(){
		this.check();
	}
	
	connect = () =>{
		let that = this
		var connectInterval;

		// websocket onopen event listener
		ws.onopen = () => {
			console.log("connected websocket component");
			this.setState({...this.state, ws: ws});
			const message = {Cosa: "inicio"};
			ws.send(JSON.stringify(message));

			that.timeout = 250; // reset timer to 250 on open of websocket connection 
            clearTimeout(connectInterval); // clear Interval on on open of websocket connection
		}

		// websocket onclose event listener
		ws.onclose = e => {
            console.log(
                `Socket is closed. Reconnect will be attempted in ${Math.min(
                    10000 / 1000,
                    (that.timeout + that.timeout) / 1000
                )} second.`,
                e.reason
            );

            that.timeout = that.timeout + that.timeout; //increment retry interval
            connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
        };

		// websocket onerror event listener
        ws.onerror = err => {
            console.error(
                "Socket encountered error: ",
                err.message,
                "Closing socket"
            );

            ws.close();
        };

		// websocket onmessage event listener

		ws.onmessage = e => {
			const message = JSON.parse(e.data)
			console.log(message.Num);
			this.setState({...this.state, counter:message.Num});
		}
	};

	/**
     * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
     */
    check = () => {
        const { ws } = this.state;
        if (!ws || ws.readyState === WebSocket.CLOSED) this.connect(); //check if websocket instance is closed, if so call `connect` function.
    };

	resetCounter = () => {
		const message = {Cosa: "reset"};
		try {
			const webS = this.state.ws;
			webS.send(JSON.stringify(message));
		} catch (error) {
			console.log(error)
		}
	};

	render() {
		return (
			<div>
				<h1> Counter: </h1>
				<h2> {this.state.counter} </h2>

				<Button color='blue' text='reset' onClick= {this.resetCounter} />
			</div>
		);
	} 
}
