const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        { id: 1, message: 'Hi, Dima!', likesCount: 15 },
        { id: 2, message: 'Hi, Eva!', likesCount: 20 }
    ],
    newPostText: 'Hi, Sveta!'
};

export type ProfilePagePropsType = {
    postData: PostDataPropsType[];
    newPostText: string;
};

export type PostDataPropsType = {
    id: number;
    message: string;
    likesCount: number;
};

export type ActionTypesAC = AddPostACType | UpdateNewPostTextACType;

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
                    { id: 3, message: state.newPostText, likesCount: 18 }
                ],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
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

export default profilePageReducer;
