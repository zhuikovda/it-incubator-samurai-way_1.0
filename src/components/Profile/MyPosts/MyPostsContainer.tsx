import React, { KeyboardEvent } from 'react';
import {connect} from 'react-redux';
import { Dispatch } from 'redux';
import { AddPostAC, PostDataPropsType, UpdateNewPostTextAC } from '../../../redux/profilePageReducer';
import { AppStateType } from '../../../redux/redux-store';
import MyPosts from './MyPosts';

// type MyPostsPropsType = {
//     stateProfile: ProfilePagePropsType;
//     dispatch: (action: ActionTypesAC) => void;
// };

// const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();

//                 const addPostHandler = () => {
//                     store.dispatch(AddPostAC());
//                 };

//                 const onChangeTextareaHandler = (text: string) => {
//                     store.dispatch(UpdateNewPostTextAC(text));
//                 };

//                 return (
//                     <MyPosts
//                         UpdateNewPostText={onChangeTextareaHandler}
//                         AddPostHandler={addPostHandler}
//                         posts={state.profilePage.postData}
//                         newPostText={state.profilePage.newPostText}
//                     />
//                 );
//             }}
//         </StoreContext.Consumer>
//     );
// };

type MapStateToPropsType = {
    posts: PostDataPropsType[];
    newPostText: string;
};

type MapDispatchToPropsType = {
    UpdateNewPostText: (text: string) => void;
    AddPostHandler: () => void;
};
export type MyPostsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        AddPostHandler: () => {
            dispatch(AddPostAC());
        },
        UpdateNewPostText: (text: string) => {
            dispatch(UpdateNewPostTextAC(text));
        }
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
