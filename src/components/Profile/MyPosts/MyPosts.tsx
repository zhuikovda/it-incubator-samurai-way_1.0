import React, { KeyboardEvent } from "react";
import cl from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { ActionTypes, ProfilePagePropsType } from "../../../redux/state";

type MyPostsPropsType = {
    stateProfile: ProfilePagePropsType;
    dispatch: (action: ActionTypes) => void;
};

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const postElement = props.stateProfile.postData.map((post) => (
        <Post message={post.message} likesCount={post.likesCount} />
    ));

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        props.dispatch({ type: "ADD-POST" });
    };

    const onChangeTextareaHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
            newPostElement.current.value = "";
        }
    };

    return (
        <div className={cl.wrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onChangeTextareaHandler}
                        ref={newPostElement}
                        value={props.stateProfile.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={cl.posts}>{postElement}</div>
        </div>
    );
};

export default MyPosts;
