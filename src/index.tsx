import "./index.css";
import {store} from "./redux/state";
import React, { FC } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import {
//     StatePropsType,
//     addMessage,
    // addPost,
//     updateNewMassageText,
//     updateNewPostText
// } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

export const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                // state={store._state}
                // addPost={store.addPost}
                // updateNewPostText={store.updateNewPostText}
                // addMessage={store.addMessage}
                // updateNewMassageText={store.updateNewMassageText}
                store={store}
            />
        </BrowserRouter>,
        document.getElementById("root")
    );
};

renderEntireTree();

store.subscribe(renderEntireTree);
