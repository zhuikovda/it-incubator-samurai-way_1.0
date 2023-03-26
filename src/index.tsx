import "./index.css";
import React, {FC} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


export let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store = {store}>
                <App /* store ={store} */ />
            </Provider>
        </BrowserRouter>,
        document.getElementById("root")
    );
};

renderEntireTree();

store.subscribe(() => {
    renderEntireTree();
});


