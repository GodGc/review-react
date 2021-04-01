import React, {useRef, useEffect} from "react";
import PropTypes from "prop-types";


function CustomTextInput02(props) {
    let inputRef = null;
    function handleReciveRef(ref) {
        console.log('ref', ref)
        inputRef = ref;
    }
    function handleClick() {
        inputRef.focus();
        console.log('inputRef', inputRef)
    }
    
    return (
        <div>
            {props.txt}
            <input type="text" ref={handleReciveRef} />
            <input type="button" value="Focus the text input" onClick={handleClick} />
        </div>
    );
}
// 使用propTypes对props进行验证
CustomTextInput02.propTypes = {
    txt: PropTypes.string
}
CustomTextInput02.defaultProps = {
    txt: "I'm Default"
}


// 函数组件使用useRef hook方法使用ref属性
function CustomTextInput(props) {
    // 这里必须声明 textInput，这样 ref 才可以引用它
    const textInput = useRef(null);

    function handleClick() {
        textInput.current.focus();
    }

    return (
        <div>
            <input type="text" ref={textInput} />
            <input type="button" value="Focus the text input" onClick={handleClick} />
        </div>
    );
}

// 3. 组件通过转发api接收ref容器，并且挂载到真正要用的地方
// React.forwardRef接收2个参数：props、ref；其中ref作为一个单独的参数存在的
const FancyButton = React.forwardRef((props, ref) => (
    <>
        <button className="FancyButton" onClick={props.onClick}>
            Click me to Focus input
        </button>
        <input type="text" ref={ref} defaultValue={props.children} />
    </>
));

// 1. 创建ref容器，用于承接需要转发出来的dom
const ref = React.createRef();
function Fancy(props) {
    function onClick() {
        console.log("ref", ref);
        ref.current.focus();
    }
    return [
        // 2. 传递ref容器给组件
        <FancyButton key="AA" ref={ref} onClick={onClick}>
            Click me!
        </FancyButton>,
        <li key="A">First item</li>,
        <li key="B">Second item</li>,
        <li key="C">Third item</li>,
        <CustomTextInput key="CC"/>,
        <CustomTextInput02 key="CCC" />
    ];
}

console.log('Fancy', Fancy.prototype)

export default Fancy;
