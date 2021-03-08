import React, {useState, Profiler} from "react";
import ReactDom from "react-dom";
const root = document.getElementById('dummybodyid');

function Index() {
    const [flag, setFlag] = useState(false)
    const redBoxRender = flag && <RedBox />
    function handleGetData(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions){
        console.log('id, phase, actualDuration, baseDuration, startTime, commitTime, interactions', id, phase, actualDuration, baseDuration, startTime, commitTime, interactions)
    }
    return (
        <Profiler id='modal' onRender={handleGetData}>
            <div>I'm Portal Page</div>
            <button onClick={()=>{setFlag(!flag)}}>Click me to create a dom in root</button>
            {redBoxRender}
        </Profiler>
    );
}

class RedBox extends React.Component {
    render(){
        return (
            ReactDom.createPortal(<div style={{backgroundColor: 'red', width: '100px', height: '100px'}}>RED</div> ,root)
        )
    }
}

export default Index;
