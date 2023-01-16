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

import { StatePropsType, addMessage, updateNewMassageText } from "./redux/state";

type AddPropsType = {
    addPost: () => void;
    updateNewPostText: (newText: string) => void;
    addMessage: () => void;
    updateNewMassageText: (newMessage: string) => void;
    state: StatePropsType;
};

const App: React.FC<AddPropsType> = (props) => {
    return (
        <div className="app_wrapper">
            <Header />
            <Nav stateSidebarFriends={props.state.sidebarFriends} />
            <div className="app__wrapper_content">
                <Route
                    path="/profile"
                    render={() => (
                        <Profile
                            stateProfile={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                        />
                    )}
                />
                <Route
                    path="/dialogs"
                    render={() => (
                        <Dialogs
                            stateDialogs={props.state.dialogsPage}
                            addMessage={addMessage}
                            updateNewMassageText={updateNewMassageText}
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
