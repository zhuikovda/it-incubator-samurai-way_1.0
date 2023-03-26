import React from "react";
// import cl from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ActionTypesAC, ProfilePagePropsType } from "../../redux/profilePageReducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



// type ProfilePropsType = {
//     stateProfile: ProfilePagePropsType;
//     dispatch: (action: ActionTypesAC) => void;
// };

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
