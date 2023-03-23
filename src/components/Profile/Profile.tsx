import React from "react";
// import cl from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePagePropsType } from "../../redux/redux-store";
import { ActionTypesAC } from "../../redux/profilePageReducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    stateProfile: ProfilePagePropsType;
    dispatch: (action: ActionTypesAC) => void;
};

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer  stateProfile={props.stateProfile} dispatch={props.dispatch} />
        </div>
    );
};

export default Profile;
