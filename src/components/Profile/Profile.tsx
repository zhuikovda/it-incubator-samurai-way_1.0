import React from "react";
// import cl from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ActionTypesAC, ProfilePagePropsType } from "../../redux/store";

type ProfilePropsType = {
    stateProfile: ProfilePagePropsType;
    dispatch: (action: ActionTypesAC) => void;
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
