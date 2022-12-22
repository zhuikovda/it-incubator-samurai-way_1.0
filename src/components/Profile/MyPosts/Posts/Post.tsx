import React from 'react';
import cl from './Post.module.css';
import "../MyPosts"

type PropsPostType = {
    message: string,
    likesCount: number
}

const Post = (props: PropsPostType) => {
    return (
        <div className={cl.item}>
            <img src="https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg" alt=""/>
            {props.message}
            <div>
                <span>likes</span>  {props.likesCount}
            </div>
        </div>
    )
}

export default Post;