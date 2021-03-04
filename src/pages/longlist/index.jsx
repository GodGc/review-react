import React from "react";
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from "react-virtualized";
const cache = new CellMeasurerCache({ defaultHeight: 30, fixedWidth: true });
const list = new Array(100).fill("wala");

class ListOfWords extends React.PureComponent {
    render() {
      return <div>{this.props.words.x}</div>;
    }
  }

function cellRenderer({ index, key, parent, style }) {
    console.log(index);
    return (
        <CellMeasurer cache={cache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
            <div style={style}>{list[index]}{index}</div>
        </CellMeasurer>
    );
}
class TestList extends React.Component {
    state = {
        newObj: {x: -1}
    }
    handleOnClick = ()=>{
        // 不可变
        // this.setState(state => ({
        //     newObj: {...state.newObj, x: 999},
        // }));
        // 可变
        let {newObj} = this.state;
        // newObj.x = 999;
        this.setState({
            newObj: Object.assign({}, newObj, {x: 9999})
        })
    }

    render() {
        return (
            <div style={{height: '100vh'}} onClick={this.handleOnClick}>
                <ListOfWords  words={this.state.newObj} />
                <AutoSizer>
                    {({ height, width }) => (
                         <List
                            height={height}
                            rowCount={list.length}
                            rowHeight={cache.rowHeight}
                            deferredMeasurementCache={cache}
                            rowRenderer={cellRenderer}
                            width={width}
                        />
                    )}
                </AutoSizer>
            </div>
        );
    }
}

export default TestList;
