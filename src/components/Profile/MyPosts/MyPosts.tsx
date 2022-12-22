import React from 'react';
import cl from './MyPosts.module.css';
import Post from "./Posts/Post";

const MyPosts = () => {
    return (<div className={cl.wrapper}>
        <div>
            My posts
        </div>
        <div>
            New posts
        </div>
        <div className={cl.posts}>
            <Post message={"Hi, Dima!"} likesCount={15}/>
            <Post message={"Hi, Eva!"} likesCount={20}/>

        </div>
    </div>)
}

export default MyPosts;