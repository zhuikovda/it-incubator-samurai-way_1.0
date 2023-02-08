import { ActionTypesAC, DialogsPagePropsType, MessageDataPropsType } from "./store";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsPageReducer = (state: DialogsPagePropsType, action: ActionTypesAC) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageDataPropsType = {
                id: 7,
                message: state.newMessageText,
                leftEdge: true,
                ava: ""
            };
            state.messageData.push(newMessage);
            state.newMessageText = "";
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;

        default:
            return state;
    }
};

export type AddMessageACType = ReturnType<typeof AddMessageAC>;
export const AddMessageAC = () => {
    return {
        type: ADD_MESSAGE
    } as const;
};

export type UpdateNewMessageTextACType = ReturnType<typeof UpdateNewMessageTextAC>;
export const UpdateNewMessageTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text
    } as const;
};

export default dialogsPageReducer;
