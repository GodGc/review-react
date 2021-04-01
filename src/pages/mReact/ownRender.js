// element => vnode
// node => real node
function render(element, container) {
    // element => node
    let node = createNode(element);
    // 将node插入container
    container.appendChild(node);
}

function createNode(element) {
    let node;
    let { type } = element;
    // 根据type不同进行创建
    if (typeof type === "string") {
        node = updateHostElement(element);
    } else {
        node = updateTextNode(element);
    }
    return node;
}
// 原生标签
function updateHostElement(element) {
    let { type, props } = element;
    let node = document.createElement(type);

    updateNode(node, props);

    if (props.children) {
        reconcileChildren(node, props.children);
    }
    return node;
}

// 文本标签
function updateTextNode(element) {
    let node = document.createTextNode(element);
    return node;
}

// 子节点
function reconcileChildren(parentNode, children) {
    children = Array.isArray(children) ? children : [children];
    children.forEach((child) => {
        render(child, parentNode);
    });
}

// 更细属性
function updateNode(node, nextVal) {
    Object.keys(nextVal)
        .filter((key) => key !== "children")
        .forEach((key) => {
            node[key] = nextVal[key];
        });
}

export default { render };
