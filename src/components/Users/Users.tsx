import React, {Component, FC} from 'react';
import {UsersContainerPropsType} from './UsersContainer';
import s from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/istockphoto-1300845620-612x612.jpg';

export class Users extends Component<UsersContainerPropsType> {
    componentDidMount(): void {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSise}`
            )
            .then((res) => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
            });
    }

    onClickHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSise}`
            )
            .then((res) => {
                this.props.setUsers(res.data.items);
            });
    };

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSise);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                {this.props.users.map((el) => (
                    <div key={el.id}>
                        <span className={s.avaFollowContainer}>
                            <img src={el.photos.small ? el.photos.small : userPhoto} alt='' />
                            <div>
                                {el.followed
                                    ? (<button onClick={() => {this.props.unFollowUsers(el.id);}}>
                                        Unfollow{' '}
                                    </button>)
                                    : (<button onClick={() => {this.props.followUsers(el.id);}}>
                                        Follow
                                    </button>)}
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
                            <span className={this.props.currentPage === el ? s.selPage + ' ' + s.page : s.page}
                                onClick={(e) => {this.onClickHandler(el);}}>
                                {el}
                            </span>
                        );
                    })}
                </div>
            </div>
        );
    }
}
