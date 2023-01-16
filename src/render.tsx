import React, { FC } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
    StatePropsType,
    addMessage,
    addPost,
    updateNewMassageText,
    updateNewPostText
} from "./redux/state";
import { BrowserRouter } from "react-router-dom";

// type RenderEntireTreePropsType = {
//     // addPost: (postMessage: string) => void
//     state: StatePropsType
// }

export const renderEntireTree = (state: StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                updateNewMassageText={updateNewMassageText}
            />
        </BrowserRouter>,
        document.getElementById("root")
    );
};

// renderEntireTree()
