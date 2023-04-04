import React, { FC } from 'react';
import { UsersContainerPropsType } from './UsersContainer';
import s from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/istockphoto-1300845620-612x612.jpg'

export const Users: FC<UsersContainerPropsType> = (props) => {
    if (props.users.length === 0) {
        // props.setUsers([
        //     {
        //         id: 1,
        //         ava: 'https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png',
        //         followed: false,
        //         fullName: 'Dima',
        //         status: 'I am a father',
        //         location: {
        //             country: 'Belarus',
        //             city: 'Minsk'
        //         }
        //     },
        //     {
        //         id: 2,
        //         ava: "https://img.freepik.com/premium-vector/woman-avatars-with-different-emotions-girl-with-spring-or-summer-flowers-and-a-wreath-in-black-hair_427567-1481.jpg",
        //         followed: true,
        //         fullName: 'Eva',
        //         status: 'I am a daughter',
        //         location: {
        //             country: 'Belarus',
        //             city: 'Minsk'
        //         }
        //     },
        //     {
        //         id: 3,
        //         ava: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg',
        //         followed: false,
        //         fullName: 'Sveta',
        //         status: 'I an a mother',
        //         location: {
        //             country: 'Belarus',
        //             city: 'Minsk'
        //         }
        //     }
        // ])

        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then((res) => {
                props.setUsers(res.data.items);
            });
    }
    return (
        <div>
            {props.users.map((el) => (
                <div key={el.id}>
                    <span className={s.avaFollowContainer}>
                        <img
                            src={
                                el.photos.small
                                    ? el.photos.small
                                    : userPhoto
                            }
                            alt=''
                        />
                        <div>
                            {el.followed ? (
                                <button
                                    onClick={() => {
                                        props.unFollowUsers(el.id);
                                    }}
                                >
                                    Unfollow
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
        </div>
    );
};
