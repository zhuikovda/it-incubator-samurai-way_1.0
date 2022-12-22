import React from "react"
// import cl from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"

// import Post from "./My posts/Posts/Post";
// import MyPosts from "./My posts/MyPosts";

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}

export default Profile
