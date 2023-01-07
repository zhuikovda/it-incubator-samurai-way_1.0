/* eslint-disable react/jsx-no-undef */
// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { SidebarFriends } from "./components/SidebarFriends/SidebarFriends";

// type StatePropsType ={
//     state: SocialNetworkPropsType
// }

// type SocialNetworkPropsType = {
//     dialogsPage: DialogPagePropsType;
//     profilePage: ProfilePagePropsType;
// };

// type DialogPagePropsType = {
//     dialogData: Array<DialogDataPropsType>;
//     messageData: Array<MessageDataPropsType>;
// };

// type ProfilePagePropsType = {
//     dialogData: Array<DialogDataPropsType>;
//     messageData: Array<MessageDataPropsType>;
//     postData: Array<PostDataPropsType>;
// };

// type DialogDataPropsType = {
//     id: number;
//     name: string;
// };

// type MessageDataPropsType = {
//     id: number;
//     message: string;
// };

// type PostDataPropsType = {
//     id: number;
//     message: string;
//     likesCount: number;
// };

const App = (props: any) => {
    return (
        <div className="app_wrapper">
            <Header />
            <Nav stateSidebarFriends={props.state.sidebarFriends} />
            <div className="app__wrapper_content">
                <Route
                    path="/profile"
                    render={() => <Profile stateProfile={props.state.profilePage} />}
                />
                <Route
                    path="/dialogs"
                    render={() => <Dialogs stateDialogs={props.state.dialogsPage} />}
                />
                <Route path="/news" render={() => <News />} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/settings" render={() => <Settings />} />
            </div>
            {/* <Route
                    path="/sidebarFriends"
                    render={() => (
                        <SidebarFriends stateSidebarFriends={props.state.sidebarFriends} />
                    )}
                /> */}
        </div>
    );
};

export default App;
