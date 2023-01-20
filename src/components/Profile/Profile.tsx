import React from "react";
// import cl from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ActionTypes, ProfilePagePropsType } from "../../redux/state";

type ProfilePropsType = {
    stateProfile: ProfilePagePropsType;
    dispatch: (action: ActionTypes) => void;
};

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts stateProfile={props.stateProfile} dispatch={props.dispatch} />
        </div>
    );
};

export default Profile;
