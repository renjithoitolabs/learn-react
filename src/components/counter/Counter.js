import React, { useReducer } from "react";
import countReducer from "../utils/countReducer";
import { TYPE } from "../utils/countReducer";

const initilaState = {
    value: 0
}

const Counter = () => {
    // const [count, setCount] = useState(0); OLD WAY
    const [state, dispatch] = useReducer(countReducer, initilaState); // useReducer WAY
    // const [bg, setBg] = useState("white");
    return (
        <div className="card text-center mb-4" style={{ backgroundColor: state.color }}>
            <div className="card-body">
                <a onClick={() => dispatch({
                    type: TYPE.CHANGE_VALUE,
                    payload: 1
                })} className="btn btn-outline-success">Increment</a>
                <h1 className="card-title">{state.value}</h1>
                <a onClick={() => dispatch({
                    type: TYPE.CHANGE_VALUE,
                    payload: -1
                })} className="btn btn-outline-danger">Decrement</a>
                <hr />
                <a onClick={() => dispatch({
                    type: TYPE.CHANGE_COLOR,
                    payload: 'palegoldenrod'
                })} className="btn btn-outline-secondary">Gold</a>
                <a onClick={() => dispatch({
                    type: TYPE.CHANGE_COLOR,
                    payload: 'palegreen'
                })} className="btn btn-outline-secondary mx-3">Green</a>
            </div>
        </div>
    );
}

export default Counter;