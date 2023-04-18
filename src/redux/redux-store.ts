import {combineReducers, createStore} from 'redux';
import dialogsPageReducer from './dialogsPageReducer';
import sidebarFriendsReducer from './sidebarFriendsReducer';
import usersReducer from './usersReducer ';
import profilePageReducer from './profilePageReducer';

export const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebarFriends: sidebarFriendsReducer,
    usersPage: usersReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

let store = createStore(rootReducer);

export default store;
