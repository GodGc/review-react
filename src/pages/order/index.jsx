import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Manager from "../contextManager";

class Clock extends React.Component {
    timer = null;
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            num: 0,
        };
        this.handleChangeTxt;
    }
    // 组件挂载时调用
    componentDidMount() {
        this.timer = setInterval(() => {
            this.tick();
        }, 1000);
        console.log("this", this.timer, this.context);
        this.handleChangeTxt = this.context.changeTxt;


        this.setState({
            num: this.state.num+1
        })
        console.log('async-num01:', this.state.num);
        this.setState({
           num: this.state.num+1
        })
        console.log('async-num02:', this.state.num);

        setTimeout(() => {
            this.setState({
               num: this.state.num+1
            })
            console.log('un-async-num01:', this.state.num);
            this.setState({
               num: this.state.num+1
            })
            console.log('un-async-num02:', this.state.num);
            this.setState({
                num: this.state.num+1
            })
            console.log('un-async-num03:', this.state.num);
        }, 0);
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
                {value => {
                    return <i>
                        {value.txt}
                        num: {this.state.num}
                    </i>
                }}


                {/* <div>
                    <div onClick={()=>{this.handleChangeTxt("me too")}}>
                        {this.context.txt}
                        <h1>Hello, world!</h1>
                        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                    </div>
                </div> */}
            </Manager.Consumer>
        );
    }
}

Clock.contextType = Manager;

export default Clock;
