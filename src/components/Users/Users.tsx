import React, {Component, FC} from 'react';
import {UsersContainerPropsType} from './UsersContainer';
import s from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/istockphoto-1300845620-612x612.jpg';

export class Users extends Component<UsersContainerPropsType> {
    constructor(props: UsersContainerPropsType) {
        super(props);
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then((res) => {
                this.props.setUsers(res.data.items);
            });
    }

    render() {

        return (
            <div>
                {this.props.users.map((el) => (
                    <div key={el.id}>
                        <span className={s.avaFollowContainer}>
                            <img src={el.photos.small ? el.photos.small : userPhoto} alt='' />
                            <div>
                                {el.followed
                                    ? (<button onClick={() => {this.props.unFollowUsers(el.id);}}>Unfollow </button>)
                                    : (<button onClick={() => {this.props.followUsers(el.id);}}>Follow</button>)}
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
    }

};
