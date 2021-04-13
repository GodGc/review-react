import React from "react";
import {Store} from "../redux/Store"
import {connect} from "react-redux"
import {increment, reset, fetchData} from "../redux/actions";

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 999,
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

        // setTimeout(() => {
        //     this.setState({
        //         data: 999,
        //     });
        // }, 2000);
    }

    handleOnClick = ()=>{
        console.log('onClick', this.props,this.props.storeData);
        // 执行dispatch
        this.props.increment();
    }

    render() {
        return <div onClick={this.handleOnClick} >
            demo {this.state.data}
            <br/>
            StoreData: {this.props.storeData&&this.props.storeData.count}
        </div>;
    }
}

// store 中state 对 当前组件props的映射，告诉store你要从它那里取什么值
function mapStateToProps(state){
    // 可以取特定的某个值
    // return {
    //   count: state.count,
    // }
    // 可以全部映射到props上
    return {
        storeData: state
    }
}

// connect dispatch - 这样dispatch就会挂载到this.props上，执行时会自动执行 this.props.dispatch(actions)
const mapDispatchToProps = {
    increment,
    reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo)
