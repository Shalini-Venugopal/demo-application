import React from 'react';
import './Counter.css';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : 0
        };
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount,10);     //base 10

        if(!isNaN(count)) {
            this.setState(() => ({count}))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne(){
        //console.log('handleAddOne');
        this.setState((prevState) =>{
            return {
                count : prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        //console.log('handleMinusOne');
        this.setState((prevState) =>{
            return {
                count : prevState.count - 1
            };
        });
    }
    handleReset(){
        //console.log('handleReset');
        this.setState(() => {
            return {
                count : 0
            }
        });
    }
    render() {
        return (
            <div className="counter">
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>Count+1</button>
                <button onClick={this.handleMinusOne}>Count-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}



export default Counter;