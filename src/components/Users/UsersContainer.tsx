import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import {
    followAC,
    InitialStateType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from '../../redux/usersReducer ';
import { Users } from './Users';

type MapStateToPropsType = {
    users: UsersType[];
    pageSise: number;
    totalUsersCount: number;
    currentPage: number;
};

type MapDispatchToPropsType = {
    followUsers: (userID: number) => void;
    unFollowUsers: (userID: number) => void;
    setUsers: (users: UsersType[]) => void;
    setCurrentPage: (currentPage: number) => void;
    setTotalUsersCount: (totalUsersCount: number)=> void
};

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSise: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (userCount: number) => {
            dispatch(setCurrentPageAC(userCount));
        },
        setTotalUsersCount: (totalUsersCount: number)=>{
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
