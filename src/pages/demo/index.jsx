import React from "react";

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 123,
        };
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('shouldComponentUpdate RUN==', nextProps, nextState)
    // }

    static getDerivedStateFromProps(props, state) {
        console.log("传入的props", props);
        console.log("组件的state", state);
        if (state.data == 999) {
            return null;
        } else {
            return {
                data: -1,
            };
        }
    }

    componentDidMount() {
        console.log("componentDidMount RUN==");

        setTimeout(() => {
            this.setState({
                data: 999,
            });
        }, 2000);
    }

    render() {
        return <div>demo {this.state.data}</div>;
    }
}

// export default function Demo(){
//     return (
//         <div>demo</div>
//     )
// }
