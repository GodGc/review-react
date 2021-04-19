import React, { Component, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./index.scss";
// 使用lazy引入页面组件
const Index = lazy(() => import("./pages/index"));
const Order = lazy(() => import("./pages/order"));
const EventHandle = lazy(() => import("./pages/eventHandle"));
const ErrorBoundary = lazy(() => import("./pages/errorBoundary"));
const FancyButton = lazy(() => import("./pages/ref"));
const LongList = lazy(() => import("./pages/longlist"));
const Portal = lazy(() => import("./pages/portal"));
const Memo = lazy(() => import("./pages/memo"));
const HookPage = lazy(() => import("./pages/hkpage"));
const FiberPage = lazy(() => import("./pages/fiber"));
const Interview = lazy(() => import("./pages/interview"));
const Demo = lazy(() => import("./pages/demo"));
const Demo02 = lazy(() => import("./pages/demo02"));
import Manager from "./pages/contextManager"
// redux
import { Provider } from "react-redux"
import {Store} from "./pages/redux/Store"

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
            changeTxt: this.changeTxt,
        }
    }

    // componentWillMount(){
    //     this.setState({
    //         txt: 'APP入口传入的默认数据'
    //     })
    // }

    render() {
        console.log('APP-render',this.state.txt)
        return (
            // 通过新旧值检测来确定变化，使用了与 Object.is 相同的算法。
            // <Manager.Provider value={this.state}> 
            // 使用redux进行数据管理
            <Provider store={Store}>
                <Suspense fallback={<div>loading...</div>}>
                    <Switch>
                        <Route path="/demo02" component={Demo02} />
                        <Route path="/demo" component={Demo} />
                        <Route path="/interview" component={Interview} />
                        <Route path="/fiber" component={FiberPage} />
                        <Route path="/hook" component={HookPage} />
                        <Route path="/memo" component={Memo} />
                        <Route path="/portal" component={Portal} />
                        <Route path="/longlist" component={LongList} />
                        <Route path="/ref" component={FancyButton} />
                        <Route path="/err" component={ErrorBoundary} />
                        <Route path="/event" component={EventHandle} />
                        <Route path="/order" component={Order} />
                        <Route path="/" component={Index} />
                    </Switch>
                </Suspense>
            </Provider>
            // </Manager.Provider>
        );
    }
}

export default App