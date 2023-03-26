import React, {KeyboardEvent} from "react";
import cl from "./MyPosts.module.css";
import Post from "./Posts/Post";
import {ActionTypesAC, AddPostAC, PostDataPropsType, UpdateNewPostTextAC} from "../../../redux/profilePageReducer";
import {MyPostsContainerPropsType} from "./MyPostsContainer";


// type MyPostsPropsType = {
//     // stateProfile: ProfilePagePropsType;
//     // dispatch: (action: ActionTypesAC) => void;
//     posts: PostDataPropsType[];
//     newPostText: string;
//     UpdateNewPostText: (text: string) => void;
//     AddPostHandler: () => void;
// };

const MyPosts: React.FC<MyPostsContainerPropsType> = (props) => {
    const postElement = props.posts.map((post: PostDataPropsType) => (
        <Post message={post.message} likesCount={post.likesCount} />
    ));


    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPostHandler = () => {
        props.AddPostHandler();
        // props.dispatch(AddPostAC());
    };

    const onChangeTextareaHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.UpdateNewPostText(text);
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
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPostHandler}>Add post</button>
                </div>
            </div>
            <div className={cl.posts}>{postElement}</div>
        </div>
    );
};

export default MyPosts;
