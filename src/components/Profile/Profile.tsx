import React from "react";
// import cl from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePagePropsType } from "../../redux/state";

// import Post from "./My posts/Posts/Post";
// import MyPosts from "./My posts/MyPosts";

// let postData = [
//     { id: 1, message: "Hi, Dima!", likesCount: 15 },
//     { id: 1, message: "Hi, Eva!", likesCount: 20 }
// ];

type ProfilePropsType ={
    stateProfile: ProfilePagePropsType
    addPost: () => void
    updateNewPostText: (newText: string) => void;
}

// type ProfilePagePropsType = {
//     postData: PostDataPropsType[];
// };

// type PostDataPropsType = {
//     id: number;
//     message: string;
//     likesCount: number;
// };


const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts stateProfile={props.stateProfile} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};

export default Profile;
