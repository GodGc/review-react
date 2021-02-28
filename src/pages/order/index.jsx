import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Manager from "../contextManager";

// function Order(props) {
//     return (
//         <div className="txt-18">
//             123
//             <Clock />
//         </div>
//     );
// }

class Clock extends React.Component {
    timer = null;
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }
    // 组件挂载时调用
    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick();
        }, 1000);
        console.log("this", this.timer, this.context);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <Manager.Consumer>
                {item => {
                    <div>
                        {item}
                        <h1>Hello, world!</h1>
                        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                    </div>
                }}
            </Manager.Consumer>
        );
    }
}

export default Clock;
