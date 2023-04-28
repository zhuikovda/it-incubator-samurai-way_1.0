import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import store from './redux/redux-store';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
    let state = store.getState();
    return (
        <div className='app_wrapper'>
            <Header />
            <Nav stateSidebarFriends={state.sidebarFriends} />
            <div className='app__wrapper_content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/settings' render={() => <Settings />} />
                <Route path='/users' render={() => <UsersContainer />} />
            </div>
        </div>
    );
};

export default App;
