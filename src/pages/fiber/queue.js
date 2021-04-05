// fiber单元 => 最小单元
class Update {
    constructor(payload, nextUpdate) {
        this.payload = payload; // payload 数据 - 储存数据
        this.nextUpdate = nextUpdate; // 指向下一个节点的指针
    }
}
// 更新队列 => 主流程
class UpdateQueue {
    constructor() {
        this.baseState = null; // state - 存储state状态
        this.firstUpdate = null; // 第一个更新 - 头指针
        this.lastUpdate = null; // 最后一个更新 - 尾指针
    }

    // 插入节点单元
    enqueueUpdate(update) {
        // 当前链表是空链表
        if (!this.firstUpdate) {
            // code 1
            this.firstUpdate = this.lastUpdate = update;
            console.log('this.firstUpdate', this.firstUpdate)
            console.log('this.lastUpdate', this.lastUpdate)
        } else {
            // 当前链表不为空
            // code 2
            this.lastUpdate.nextUpdate = update; // 当前尾指针 挂载 最新的fiber
            // console.log('1=this.lastUpdate', this.lastUpdate)
            this.lastUpdate = update; // 更新尾指针为最新
            // console.log('2=this.lastUpdate', this.lastUpdate)
        }
    }

    // 获取state，然后遍历这个链表，合并数据，进行更新
    forceUpdate() {
        let currentState = this.baseState || {};
        let currentUpdate = this.firstUpdate;
        // 循环捞取数据
        while (currentUpdate) {
            // 判断是函数还是对象，是函数则需要执行，是对象则直接返回
            let nextState = typeof currentUpdate.payload === "function" ? currentUpdate.payload(currentState) : currentUpdate.payload;
            currentState = { ...currentState, ...nextState };
            currentUpdate = currentUpdate.nextUpdate; // key part
        }
        // 更新完成后清空链表
        this.firstUpdate = this.lastUpdate = null;
        this.baseState = currentState;
        return currentState;
    }
}

let queue = new UpdateQueue()
queue.enqueueUpdate(new Update({ name: 'www' })) // code 1
queue.enqueueUpdate(new Update({ age: 10 })) // code 2
queue.enqueueUpdate(new Update(state => ({ age: state.age + 1 })))
queue.enqueueUpdate(new Update(state => ({ age: state.age + 1 })))
queue.forceUpdate()
console.log(queue.baseState);