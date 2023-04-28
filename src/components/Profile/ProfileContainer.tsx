import React, { Component, useEffect } from 'react';
import Profile from './Profile';
import { ProfilePropsType, setUsersProfile } from '../../redux/profilePageReducer';
import axios from 'axios';
import { AppStateType } from '../../redux/redux-store';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

class ProfileContainer extends Component<PropsType> {
    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((res) => {
                this.props.setUsersProfile(res.data);
            });
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
}

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

type MapStateToPropsType = {
    profile: ProfilePropsType;
};

type MapDispatchToPropsType = {
    setUsersProfile: (profile: ProfilePropsType) => void;
};

type PathParansType = {
    userId: string;
};

type PropsType = RouteComponentProps<PathParansType> & UsersContainerPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    };
};

const WithUrlDataaContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUsersProfile })(
    WithUrlDataaContainerComponent
);

//------------Functional component--------------
// export type UsersContainerPropsType = MapStateToPropsType &
//   MapDispatchToPropsType;
// type MapStateToPropsType = {
//   profile: ProfilePropsType;
// };

// type MapDispatchToPropsType = {
//   setUsersProfile: (profile: ProfilePropsType) => void;
// };

// type PathParansType = {
//   userId: string;
// };

// type PropsType = RouteComponentProps<PathParansType> & UsersContainerPropsType;

// const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
//   return {
//     profile: state.profilePage.profile
//   };
// };

// function ProfileContainer(props: PropsType) {
//   useEffect(() => {
//     const userId = props.match.params.userId;
//     axios
//       .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
//       .then((res) => {
//         props.setUsersProfile(res.data);
//       });
//   }, []);

//   return (
//     <div>
//       <Profile {...props} profile={props.profile} />
//     </div>
//   );
// }

// const WithUrlDataaContainerComponent = withRouter(ProfileContainer);

// export default connect(mapStateToProps, { setUsersProfile })(
//   WithUrlDataaContainerComponent
// );
