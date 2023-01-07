import React from "react";
// import cl from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// import Post from "./My posts/Posts/Post";
// import MyPosts from "./My posts/MyPosts";

// let postData = [
//     { id: 1, message: "Hi, Dima!", likesCount: 15 },
//     { id: 1, message: "Hi, Eva!", likesCount: 20 }
// ];

// type SocialNetworkPropsType = {
//     postData: Array<PostDataPropsType>;
// };

// type PostDataPropsType = {
//     id: number;
//     message: string;
//     likesCount: number;
// };

const Profile = (props: any) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={props.stateProfile.postData} />
        </div>
    );
};

export default Profile;
