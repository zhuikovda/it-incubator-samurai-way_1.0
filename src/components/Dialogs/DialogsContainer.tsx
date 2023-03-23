import React, {FC} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./Dialog/DialogItem";
import {MessageItem} from "./Messages/MessageItem";
import store, {DialogsPagePropsType} from "../../redux/redux-store";
import {ActionTypesAC, AddMessageAC, UpdateNewMessageTextAC} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    stateDialogs: DialogsPagePropsType;
    dispatch: (action: ActionTypesAC) => void;
};

const DialogsContainer: FC<DialogsPropsType> = (props) => {

    const state = store.getState().dialogsPage;

    const addMessageHandler = () => {
        props.dispatch(AddMessageAC());
    };

    const onChangeTextHandler = (text: string) => {
        props.dispatch(UpdateNewMessageTextAC(text));
    };

    return (
        <Dialogs updateNewMessageText={onChangeTextHandler}
            addMessage={addMessageHandler}
            // dialogData={state.dialogData}
            // messageData={state.messageData}
            // newMessageText={state.newMessageText}
            dialogsPage={state} />
    );
};

export default DialogsContainer;
