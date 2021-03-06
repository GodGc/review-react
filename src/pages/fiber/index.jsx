import React from "react";
import ReactDOM from "react-dom";
import queue from './queue';

class FiberPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    fast() {
        console.log("?");
        let taskQueue = [
            () => {
                console.log("task1 start");
                console.log("task1 end");
            },
            () => {
                console.log("task2 start");
                console.log("task2 end");
            },
            () => {
                console.log("task3 start");
                console.log("task3 end");
            },
        ];

        const performUnitWork = () => {
            // 取出第一个队列中的第一个任务并执行
            taskQueue.shift()();
        };

        const workloop = (deadline) => {
            console.log(`此帧的剩余时间为: ${deadline.timeRemaining()}`);
            // 如果此帧剩余时间大于0或者已经到了定义的超时时间（上文定义了timeout时间为1000，到达时间时必须强制执行），且当时存在任务，则直接执行这个任务
            // 如果没有剩余时间，则应该放弃执行任务控制权，把执行权交还给浏览器
            while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && taskQueue.length > 0) {
                performUnitWork();
            }

            // 如果还有未完成的任务，继续调用requestIdleCallback申请下一个时间片
            if (taskQueue.length > 0) {
                window.requestIdleCallback(workloop, { timeout: 1000 });
            }
        };
        window.requestIdleCallback(workloop, { timeout: 1000 });
    }

    slow() {
        const sleep = (delay) => {
            for (let start = Date.now(); Date.now() - start <= delay; ) {}
        };

        let taskQueue = [
            () => {
                console.log("task1 start");
                sleep(20); // 已经超过一帧的时间（16.6ms），需要把控制权交给浏览器
                console.log("task1 end");
            },
            () => {
                console.log("task2 start");
                sleep(20); // 已经超过一帧的时间（16.6ms），需要把控制权交给浏览器
                console.log("task2 end");
            },
            () => {
                console.log("task3 start");
                sleep(20); // 已经超过一帧的时间（16.6ms），需要把控制权交给浏览器
                console.log("task3 end");
            },
        ];
        const performUnitWork = () => {
            // 取出第一个队列中的第一个任务并执行
            taskQueue.shift()();
        };

        const workloop = (deadline) => {
            console.log(`此帧的剩余时间为: ${deadline.timeRemaining()}`);
            // 如果此帧剩余时间大于0或者已经到了定义的超时时间（上文定义了timeout时间为1000，到达时间时必须强制执行），且当时存在任务，则直接执行这个任务
            // 如果没有剩余时间，则应该放弃执行任务控制权，把执行权交还给浏览器
            while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && taskQueue.length > 0) {
                performUnitWork();
            }

            // 如果还有未完成的任务，继续调用requestIdleCallback申请下一个时间片
            if (taskQueue.length > 0) {
                window.requestIdleCallback(workloop, { timeout: 1000 });
            }
        };
        window.requestIdleCallback(workloop, { timeout: 1000 });
    }

    render() {
        return (
            <div>
                Fiber Page
                <br/>
                <button onClick={this.fast}>fast task</button>
                <br/>
                <button onClick={this.slow}>slow task, multi frames</button>
            </div>
        );
    }
}

export default FiberPage;
