import React, { KeyboardEvent } from "react";
import cl from "./MyPosts.module.css";
import Post from "./Posts/Post";

type MyPostsPropsType = {
    postData: PostDataPropsType[];
    addPost: (postMessage: string) => void;
};

type PostDataPropsType = {
    id: number;
    message: string;
    likesCount: number;
};

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const postElement = props.postData.map((post: any) => (
        <Post message={post.message} likesCount={post.likesCount} />
    ));

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost(text);
            newPostElement.current.value = ""          
        }
    };

    return (
        <div className={cl.wrapper}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={"__d_zh__"} />
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
