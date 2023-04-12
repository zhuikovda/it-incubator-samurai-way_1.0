const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT';
const TOGGLE_IS_FETCING = 'TOGGLE_IS_FETCING';

export type InitialStateType = typeof initialState;

export type UsersType = {
    id: number;
    name: string;
    status: string;
    photos: PhotosType;
    followed: boolean;
};

export type PhotosType = {
    small: string;
    large: string;
};

type LocationType = {
    country: string;
    city: string;
};

let initialState = {
    users: [] as UsersType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};

export type ActionTypesAC = FollowACType
    | UnfollowACType
    | SetUsersType
    | SetCurrentPagType
    | SetTotalUsersCountACType
    | ToggleIsFetchingType;

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((el) =>
                    el.id === action.userID ? {...el, followed: true} : el
                )
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((el) =>
                    el.id === action.userID ? {...el, followed: false} : el
                )
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_USER_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case TOGGLE_IS_FETCING:
            return {
                ...state,
                isFetching: action.isFetching
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

export type SetCurrentPagType = ReturnType<typeof setCurrentPageAC>;
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const;
};

export type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>;
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: SET_USER_TOTAL_COUNT,
        totalUsersCount
    } as const;
};

export type ToggleIsFetchingType = ReturnType<typeof toggleIsFetchingAC>;
export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCING,
        isFetching
    } as const;
};

export default usersReducer;
