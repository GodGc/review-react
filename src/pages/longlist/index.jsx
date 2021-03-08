import React from "react";
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from "react-virtualized";
const cache = new CellMeasurerCache({ defaultHeight: 30, fixedWidth: true });
const list = new Array(100).fill("wala");

function cellRenderer({ index, key, parent, style }) {
    console.log(index);
    return (
        <CellMeasurer cache={cache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
            <div style={style}>{list[index]}{index}</div>
        </CellMeasurer>
    );
}
class TestList extends React.Component {
    render() {
        return (
            <div style={{height: '100vh'}} onClick={this.handleOnClick}>
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