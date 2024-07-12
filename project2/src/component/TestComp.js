import { useState, useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INIT':
            return 0;
        case 'INCREASE':
            return state + action.data;
        case 'DECREASE':
            return state - action.data;
        default:
            return state;
    }
};

const TestComp = () => {
    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, 0);
    // const onIncrease = () => {
    //     setCount(count + 1);
    // };
    // const onDecrease = () => {
    //     setCount(count - 1);
    // };
    return (
        <div>
            <h4>TestComp야</h4>
            <div>
                <bold>{count}</bold>
            </div>
            {/* <button onClick={onIncrease}>+</button> */}
            <button onClick={() => dispatch({ type: 'INCREASE', data: 1 })}>
                +
            </button>
            {/* <button onClick={onDecrease}>-</button> */}
            <button onClick={() => dispatch({ type: 'DECREASE', data: 1 })}>
                -
            </button>
            <button onClick={() => dispatch({ type: 'INIT' })}>
                0으로 초기화
            </button>
        </div>
    );
};

export default TestComp;
