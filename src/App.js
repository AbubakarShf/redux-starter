import "./App.css";
import Increment from "./redux/actions/counter.action.js";
import { useSelector, useDispatch } from "react-redux";
function App() {
    const counter = useSelector((store) => store.counter);
    const trigger = useDispatch();
    return (
        <div className="App">
            <h1 className="App-Name">CounterApp</h1>
            <h3 className="Current-State">Counter: {counter}</h3>
            <button onClick={() => trigger(Increment)} className="Inc-btn">
                Increment
            </button>
        </div>
    );
}

export default App;
