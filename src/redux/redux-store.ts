import { combineReducers, createStore } from "redux";
import profilePageReducer, { AddPostACType, UpdateNewPostTextACType } from "./profilePageReducer";
import dialogsPageReducer, { AddMessageACType, UpdateNewMessageTextACType } from "./dialogsPageReducer";
import sidebarFriendsReducer from "./sidebarFriendsReducer";

export type StatePropsType = {
    dialogsPage: DialogsPagePropsType;
    profilePage: ProfilePagePropsType;
    sidebarFriends: SidebarFriendsPropsType;
};

export type DialogsPagePropsType = {
    dialogData: DialogDataPropsType[];
    messageData: MessageDataPropsType[];
    newMessageText: string;
};

export type DialogDataPropsType = {
    id: number;
    name: string;
    ava: string;
};

export type MessageDataPropsType = {
    id: number;
    message: string;
    leftEdge: boolean;
    ava: string;
};

export type ProfilePagePropsType = {
    postData: PostDataPropsType[];
    newPostText: string;
};

export type PostDataPropsType = {
    id: number;
    message: string;
    likesCount: number;
};

export type SidebarFriendsPropsType = {
    title: string;
    friends: FriendsPropsType[];
};

type FriendsPropsType = {
    id: number;
    name: string;
    ava: string;
};

export type StoreType = {
    _renderEntireTree: () => void;
    _state: StatePropsType;
    subscribe: (observer: () => void) => void;
    getState: () => StatePropsType;
    // dispatch: (action: ActionTypesAC) => void;
};

// export type ActionTypesAC =
//     | AddPostACType
//     | UpdateNewPostTextACType
//     | AddMessageACType
//     | UpdateNewMessageTextACType;

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebarFriends: sidebarFriendsReducer
});

// export type StoreType = {   
//     createStore: ()=>void;
// };
let store = createStore(reducers);

export default store;
