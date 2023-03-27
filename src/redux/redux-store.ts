import { combineReducers, createStore } from 'redux';
import profilePageReducer from './profilePageReducer';
import dialogsPageReducer from './dialogsPageReducer';
import sidebarFriendsReducer from './sidebarFriendsReducer';
import { type } from 'os';

export const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebarFriends: sidebarFriendsReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

let store = createStore(rootReducer);

export default store;
