import React, {FC} from "react";
// import cl from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypesAC, ProfilePagePropsType, ProfilePropsType} from "../../redux/profilePageReducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfileType = {
    profile: ProfilePropsType;
};


const Profile: FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    );

};

export default Profile;
