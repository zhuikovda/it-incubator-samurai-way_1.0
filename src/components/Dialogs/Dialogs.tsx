import React, { FC } from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./Dialog/DialogItem";
import { MessageItem } from "./Messages/MessageItem";
import { DialogsPagePropsType } from "../../redux/state";

type DialogsPropsType = {
    stateDialogs: DialogsPagePropsType;
};

const Dialogs: FC<DialogsPropsType> = (props) => {
    const dialogElement = props.stateDialogs.dialogData.map((dialog) => (
        <DialogItem dialogData={dialog} />
    ));

    const messageElement = props.stateDialogs.messageData.map((message) => (
        <MessageItem messageData={message} />
    ));

    const newMessageElement = React.createRef<HTMLTextAreaElement>();

    const addMessageHandler = () => {
        let text = newMessageElement.current?.value;
        alert(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>{dialogElement}</div>
            <div className={s.messages}>
                {messageElement}
                <div className={s.textarea}>
                    <div>
                        <textarea ref={newMessageElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessageHandler}>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
