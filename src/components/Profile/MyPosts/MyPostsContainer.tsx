import React, {KeyboardEvent} from "react";
import {ActionTypesAC, AddPostAC, UpdateNewPostTextAC} from "../../../redux/profilePageReducer";
import store, {ProfilePagePropsType} from "../../../redux/redux-store";
import MyPosts from "./MyPosts";



type MyPostsPropsType = {
    stateProfile: ProfilePagePropsType;
    dispatch: (action: ActionTypesAC) => void;
};

const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
    let state = store.getState();
    
    const addPostHandler = () => {
        props.dispatch(AddPostAC());
    };


    const onChangeTextareaHandler = (text: string) => {
        props.dispatch(UpdateNewPostTextAC(text));
    };

    return (
        <div>            
            <MyPosts UpdateNewPostText={onChangeTextareaHandler}
                AddPostHandler={addPostHandler}
                posts={state.profilePage.postData} 
                newPostText={state.profilePage.newPostText}
            />
        </div>
    );
};

export default MyPostsContainer;
