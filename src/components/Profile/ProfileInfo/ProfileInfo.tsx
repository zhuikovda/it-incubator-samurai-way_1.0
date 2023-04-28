import React, { FC } from 'react';
import cl from './ProfileInfo.module.css';
import { Preloader } from '../../common/Preloader';
import { ProfilePropsType } from '../../../redux/profilePageReducer';

type ProfileInfoPropsType = {
    profile: ProfilePropsType;
};

const ProfileInfo: FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        <Preloader />;
    }

    return (
        <div className={cl.content}>
            <div>
                <img src='https://wallpaperaccess.com/full/4762573.jpg'></img>
            </div>
            <div className={cl.info}>
                <img src={props.profile?.photos.large} alt='' />
                <div>
                    I'm a <b>{props.profile?.fullName}</b>
                </div>
                <div>
                    <span>
                        <b>ABOUT ME:</b>{' '}
                    </span>
                    <span>{props.profile?.aboutMe}</span>
                </div>
                <div>
                    <span>
                        <b>CONTACTS: </b>
                    </span>
                    <span>{props.profile?.contacts.github}</span>
                </div>
                <div>
                    <span>
                        <b>LOOKING FOR A JOB: </b>
                    </span>
                    <span>{props.profile?.lookingForAJob.valueOf ? 'Yes' : 'No'}</span>
                </div>
            </div>
            {/* <div className={cl.info}></div> */}
        </div>
    );
};

export default ProfileInfo;
