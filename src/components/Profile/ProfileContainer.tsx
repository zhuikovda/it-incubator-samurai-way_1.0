import React, {Component} from 'react';
import Profile from './Profile';
import {PostDataPropsType, ProfilePagePropsType, ProfilePropsType, setUsersProfile} from '../../redux/profilePageReducer';
import axios, {Axios} from 'axios';
import {AppStateType} from '../../redux/redux-store';
import {type} from 'os';
import {connect} from 'react-redux';
import {log} from 'console';

// type ProfilePropsType = {
//     stateProfile: ProfilePagePropsType;
// };

class ProfileContainer1 extends Component<UsersContainerPropsType> {
    //    const instance = axios.create({
    //         baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    //         withCredentials: true,
    //         headers: {
    //             'API-KEY': '892376f3-d5e0-4a60-a67f-68045d32a32f'
    //         }
    //     });
    componentDidMount(): void {

        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/2`
        )
            .then((res) => {
                this.props.setUsersProfile(res.data);
            });
    }

    render() {        
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
};

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType  = {
    profile: ProfilePropsType;
};

type MapDispatchToPropsType = {
    setUsersProfile: (profile: ProfilePropsType) => void;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    };
};

export const ProfileContainer = connect(mapStateToProps, {setUsersProfile})(ProfileContainer1);