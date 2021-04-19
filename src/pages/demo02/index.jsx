import React from "react";
import ReactDom from "react-dom";
import Store from "../redux/Store"
import {connect} from "react-redux"

// import {Button} from "antd"


// Button

// import 
// webpack => ABCD => ABC => D



class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }; 
    }



   

    componentDidMount() {
        console.log("componentDidMount RUN==");

    }

    handleOnClick = ()=>{
    }


    render() {
        return <div>
            demo-2
        </div>;
    }
}


export default Demo

function mapStoreDataToProps(){

}

function mapDispatchToProps(){
    
}

// export default connect(mapStoreDataToProps, mapDispatchToProps)(Demo)
