import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import { StatePropsType, StoreType, store } from "./redux/state";

type AddPropsType = {
    // addPost: () => void;
    // updateNewPostText: (newText: string) => void;
    // addMessage: () => void;
    // updateNewMassageText: (newMessage: string) => void;
    // state: StatePropsType;
    store: StoreType;
};

const App: React.FC<AddPropsType> = (props) => {
    let state = props.store.getState();
    return (
        <div className="app_wrapper">
            <Header />
            <Nav stateSidebarFriends={state.sidebarFriends} />
            <div className="app__wrapper_content">
                <Route
                    path="/profile"
                    render={() => (
                        <Profile
                            stateProfile={state.profilePage}
                            addPost={props.store.addPost.bind(store)}
                            updateNewPostText={props.store.updateNewPostText.bind(store)}
                        />
                    )}
                />
                <Route
                    path="/dialogs"
                    render={() => (
                        <Dialogs
                            stateDialogs={state.dialogsPage}
                            addMessage={props.store.addMessage.bind(store)}
                            updateNewMassageText={props.store.updateNewMassageText.bind(store)}
                        />
                    )}
                />
                <Route path="/news" render={() => <News />} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/settings" render={() => <Settings />} />
            </div>
        </div>
    );
};

export default App;
