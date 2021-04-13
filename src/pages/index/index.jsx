import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => {
                    this.props.onClick(i);
                }}
            />
        );
    }
    
    render() {
        return (
            <div>
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
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null),
                },
            ],
            xIsNext: true,
            stepNumber: 0,
            initNum: 0,
        };
    }

    componentDidMount(){
        this.setState((state, props)=>{
            console.log('setState Run')
            return {
                initNum: state.initNum + 999
            }
        })
        // 同步setState的方式，Promise 优先级 > setTimeout
        setTimeout(() => {
            // 也会脱离react事务的接管流程
            this.setState({
                initNum: this.state.initNum + 1
            })
            console.log('setTimeout run', this.state.initNum)
        }, 0);
        const promise = new Promise(function(resolve, reject) {
            if (true){
              resolve(1);
            } else {
              reject(2);
            }
          });
          promise.then(() => {
            // We're not in an event handler, so these are flushed separately.
            // this.setState({a: true}); // Re-renders with {a: true, b: false }
            // this.setState({b: true}); // Re-renders with {a: true, b: true }
            this.setState({
                initNum: this.state.initNum +1
            },()=>{
            })
            console.log('game end01', this.state.initNum)
            this.setState({
                initNum: this.state.initNum +2
            },()=>{
            })
            console.log('game end02', this.state.initNum)
        });
        console.log('game Start', this.state.initNum)
        
    }

    jumpTo(step) {
        this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0,
        });
    }
    handleClick(i) {
        console.log('FIND', ReactDOM.findDOMNode(this._board), this._board)

        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          history: history.concat([{
            squares: squares
          }]),
          stepNumber: history.length,
          xIsNext: !this.state.xIsNext,
        },()=>{
            console.log(this.state.stepNumber)
        });
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ?
              'Go to move #' + move :
              'Go to game start';
            return (
              <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>
              </li>
            );
          });
        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }
        console.log('render执行', React.createElement(
            'h1',
            {className: 'greeting'},
            'Hello, world!',
          ))
        return (
            <div className="game">
                <div className="game-board">
                    <Board key={9} ref={(_board)=>{this._board = _board}} squares={current.squares} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
console.log('Square', Square.prototype)
console.log('Game', Game.prototype)
export default Game;

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
