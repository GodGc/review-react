import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

function Square (props) {
    return (
        <button className="square" onClick={props.onClick}>{props.value}</button>
    )
}

// class Square extends React.Component {
//     render() {
//         return <button className="square" onClick={()=>{
//             this.props.onClick()
//         }}>{this.props.value}</button>;
//     }
// }

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squeres: Array(9).fill(null),
            xIsNext: true,
        }
    }

    handleClick(i){
        let {xIsNext} = this.state;
        const squeres = this.state.squeres.slice();
        squeres[i] = xIsNext?'X': 'O';
        this.setState({squeres, xIsNext: !xIsNext})
    }

    renderSquare(i) {
        return <Square value={this.state.squeres[i]} onClick={()=>{this.handleClick(i)}} />;
    }

    render() {
        let {xIsNext} = this.state;
        const status = `Next player: ${xIsNext?'X':'O'}`;

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export default Game;
