import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

function Order(props) {
    return (
        <div className="txt-18">
            {/* <Clock date={new Date()} /> */}
            <Clock />
        </div>
    );
}

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
        this.timer = setInterval(() =>{
            this.tick()
        }, 1000)
        console.log("this", this.timer);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }

export default Order;
