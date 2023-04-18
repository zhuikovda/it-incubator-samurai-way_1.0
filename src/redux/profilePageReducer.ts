const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData: [
        {id: 1, message: 'Hi, Dima!', likesCount: 15},
        {id: 2, message: 'Hi, Eva!', likesCount: 20}
    ],
    newPostText: 'Hi, Sveta!',
    profile: null
};

export type ProfilePagePropsType = {
    postData: PostDataPropsType[];
    newPostText: string;
    profile: ProfilePropsType;
};

export type ProfilePropsType = null | {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string;
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string;
    };
};

export type PostDataPropsType = {
    id: number;
    message: string;
    likesCount: number;
};

export type ActionTypesAC = AddPostACType | UpdateNewPostTextACType | setUsersProfileType;

const profilePageReducer = (
    state: ProfilePagePropsType = initialState,
    action: ActionTypesAC
): ProfilePagePropsType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [
                    ...state.postData,
                    {id: 3, message: state.newPostText, likesCount: 18}
                ],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
};

export type AddPostACType = ReturnType<typeof AddPostAC>;
export const AddPostAC = () => {
    return {
        type: ADD_POST
    } as const;
};

export type UpdateNewPostTextACType = ReturnType<typeof UpdateNewPostTextAC>;
export const UpdateNewPostTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const;
};

export type setUsersProfileType = ReturnType<typeof setUsersProfile>;
export const setUsersProfile = (profile: ProfilePropsType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const;
};

export default profilePageReducer;
