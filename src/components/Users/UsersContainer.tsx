import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {
    followAC,
    InitialStateType,
    setUsersAC,
    unfollowAC,
    UsersType
} from '../../redux/usersReducer ';
import {Users} from './Users';

type MapStateToPropsType = {
    users: UsersType[];
};

type MapDispatchToPropsType = {
    followUsers: (userID: number) => void;
    unFollowUsers: (userID: number) => void;
    setUsers: (users: UsersType[]) => void;
};

export type UsersContainerPropsType = MapStateToPropsType &
    MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followUsers: (userID: number) => {
            dispatch(followAC(userID));
        },
        unFollowUsers: (userID: number) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users));
        }
    };
};

export const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
