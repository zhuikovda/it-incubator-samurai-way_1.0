import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC,
    UsersType
} from '../../redux/usersReducer ';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from '../common/Preloader';



export class UsersContainers extends Component<UsersContainerPropsType> {
    componentDidMount(): void {
        this.props.toggleIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSise}`
            )
            .then((res) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
            });
    }

    onClickHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSise}`
            )
            .then((res) => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(res.data.items);
            });
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSise={this.props.pageSise}
                users={this.props.users}
                unFollowUsers={this.props.unFollowUsers}
                followUsers={this.props.followUsers}
                currentPage={this.props.currentPage}
                onClickHandler={this.onClickHandler}
            />
        </>;
    }
}


type MapStateToPropsType = {
    users: UsersType[];
    pageSise: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
};

type MapDispatchToPropsType = {
    followUsers: (userID: number) => void;
    unFollowUsers: (userID: number) => void;
    setUsers: (users: UsersType[]) => void;
    setCurrentPage: (currentPage: number) => void;
    setTotalUsersCount: (totalUsersCount: number) => void;
    toggleIsFetching: (isFetching: boolean) => void;
};

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSise: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainers);
