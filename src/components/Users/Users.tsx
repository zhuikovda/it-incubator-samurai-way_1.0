import React, { Component, FC } from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/istockphoto-1300845620-612x612.jpg';
import { UsersType } from '../../redux/usersReducer ';
import { NavLink } from 'react-router-dom';

type UsersPropsType = {
    totalUsersCount: number;
    pageSise: number;
    users: UsersType[];
    unfollowUsers: (userID: number) => void;
    followUsers: (userID: number) => void;
    currentPage: number;
    onClickHandler: (pageNumber: number) => void;
};

export const Users: FC<UsersPropsType> = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSise);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {props.users.map((el) => (
                <div key={el.id}>
                    <span className={s.avaFollowContainer}>
                        <NavLink to={'/profile/' + el.id}>
                            <img
                                src={el.photos.small ? el.photos.small : userPhoto}
                                alt=''
                            />
                        </NavLink>
                        <div>
                            {el.followed ? (
                                <button
                                    onClick={() => {
                                        props.unfollowUsers(el.id);
                                    }}
                                >
                                    Unfollow{' '}
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        props.followUsers(el.id);
                                    }}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{'el.location.country'}</div>
                            <div>{'el.location.city'}</div>
                        </span>
                    </span>
                </div>
            ))}
            <div className={s.pageWrapper}>
                {pages.map((el) => {
                    return (
                        <span
                            className={
                                props.currentPage === el
                                    ? s.selPage + ' ' + s.page
                                    : s.page
                            }
                            onClick={(e) => {
                                props.onClickHandler(el);
                            }}
                        >
                            {el}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};
