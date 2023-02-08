import { ActionTypesAC, PostDataPropsType, ProfilePagePropsType } from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profilePageReducer = (state: ProfilePagePropsType, action: ActionTypesAC) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostDataPropsType = {
                id: 3,
                message: state.newPostText,
                likesCount: 18
            };
            state.postData.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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
