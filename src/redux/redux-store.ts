import { combineReducers, createStore } from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sidebarFriendsReducer from "./sidebarFriendsReducer";
import {type} from "os";

// export type StatePropsType = {
//     dialogsPage: DialogsPagePropsType;
//     profilePage: ProfilePagePropsType;
//     sidebarFriends: SidebarFriendsPropsType;
// };

// export type SidebarFriendsPropsType = {
//     title: string;
//     friends: FriendsPropsType[];
// };

// type FriendsPropsType = {
//     id: number;
//     name: string;
//     ava: string;
// };

// export type StoreType = {
//     _renderEntireTree: () => void;
//     _state: StatePropsType;
//     subscribe: (observer: () => void) => void;
//     getState: () => StatePropsType;
//     // dispatch: (action: ActionTypesAC) => void;
// };

// export type ActionTypesAC =
//     | AddPostACType
//     | UpdateNewPostTextACType
//     | AddMessageACType
//     | UpdateNewMessageTextACType;

export const rootReducer = combineReducers({
    profilePage: profilePageReducer, 
    dialogsPage: dialogsPageReducer,
    sidebarFriends: sidebarFriendsReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

// export type StoreType = {   
//     createStore: ()=>void;
// };
let store = createStore(rootReducer);

export default store;
