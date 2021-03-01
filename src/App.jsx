import React, { Component, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./index.scss";
// 使用lazy引入页面组件
const Index = lazy(() => import("./pages/index"));
const Order = lazy(() => import("./pages/order"));
const EventHandle = lazy(() => import("./pages/eventHandle"));
import Manager from "./pages/contextManager"

class App extends Component {
    constructor(props) {
        super(props);
        this.changeTxt = (newTxt) =>{
            this.setState({
                txt: newTxt
            })
        }
        this.state = {
            txt: "I miss you",
            changeTxt: this.changeTxt
        }
    }
    render() {
        return (
            <Manager.Provider value={this.state}>
                <Suspense fallback={<div>loading...</div>}>
                    <Switch>
                        <Route path="/event" component={EventHandle} />
                        <Route path="/order" component={Order} />
                        <Route path="/" component={Index} />
                    </Switch>
                </Suspense>
            </Manager.Provider>
        );
    }
}

export default App