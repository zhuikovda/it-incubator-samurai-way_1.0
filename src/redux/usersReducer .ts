const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type InitialStateType = typeof initialState;

// export type UsersType = {
//     id: number;
//     ava: string;
//     followed: boolean;
//     fullName: string;
//     status: string;
//     location: LocationType;
// };
export type UsersType = {
    id: number;
    name: string;
    status: string;
    photos: PhotosType;
    followed: boolean;
    // fullName: string;

    // location: LocationType;
};

type PhotosType = {
    small: string;
    large: string;
};

type LocationType = {
    country: string;
    city: string;
};

let initialState = {
    users: [] as UsersType[]
};

export type ActionTypesAC = FollowACType | UnfollowACType | SetUsersType;

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((el) =>
                    el.id === action.userID ? { ...el, followed: true } : el
                )
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((el) =>
                    el.id === action.userID ? { ...el, followed: false } : el
                )
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        default:
            return state;
    }
};

type FollowACType = ReturnType<typeof followAC>;
export const followAC = (userID: number) => {
    return {
        type: FOLLOW,
        userID
    } as const;
};

export type UnfollowACType = ReturnType<typeof unfollowAC>;
export const unfollowAC = (userID: number) => {
    return {
        type: UNFOLLOW,
        userID
    } as const;
};

export type SetUsersType = ReturnType<typeof setUsersAC>;
export const setUsersAC = (users: UsersType[]) => {
    return {
        type: SET_USERS,
        users
    } as const;
};

export default usersReducer;
