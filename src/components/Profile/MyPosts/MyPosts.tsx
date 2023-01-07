import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Posts/Post";


type PostsPropsType = {
    postData: Array<PostDataPropsType>
}

type PostDataPropsType = {
    id: number
    message: string
    likesCount: number
}

const MyPosts = (props: PostsPropsType) => {
//     let postData = [
//         { id: 1, message: "Hi, Dima!", likesCount: 15 },
//         { id: 1, message: "Hi, Eva!", likesCount: 20 }
//     ];



    const postElement = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount}  />)

    return (
        <div className={cl.wrapper}>
            <div>My posts</div>
            <div>New posts</div>
            <div className={cl.posts}>
                {postElement}
            </div>
        </div>
    );
};

export default MyPosts;
