import React, { FC } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StatePropsType, addPost} from "./redux/state";
import { BrowserRouter } from "react-router-dom";

// type RenderEntireTreePropsType = {
//     // addPost: (postMessage: string) => void
//     state: StatePropsType
// }



export const renderEntireTree = (state: StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} />
        </BrowserRouter>,
        document.getElementById("root")
    );
};

// renderEntireTree()