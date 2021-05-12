import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

// Installed-Packages
import { createStore } from "redux";
import allReducers from "./redux/reducers/index.reducer.js";

const store = createStore(allReducers);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
