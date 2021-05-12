import "./App.css";
import React from "react";
// import Increment from "./redux/actions/counter.action.js";
import { useSelector, useDispatch } from "react-redux";
function App() {
    const counter = useSelector((store) => store.counter);
    const trigger = useDispatch();
    return (
        <React.Fragment>
            <div className="App">
                <h1 className="App-Name">CounterApp</h1>
                <h3 className="Current-State">Counter: {counter}</h3>
                <div className="btn-group">
                    <button
                        onClick={() => trigger({ type: "INCREMENT" })}
                        className="Inc-btn"
                    >
                        Increment
                    </button>
                    <button
                        onClick={() => trigger({ type: "DECREMENT" })}
                        className="Dec-btn"
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
