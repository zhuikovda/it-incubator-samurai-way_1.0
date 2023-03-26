import React, {FC} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./Dialog/DialogItem";
import {MessageItem} from "./Messages/MessageItem";
import {DialogsPagePropsType} from "../../redux/dialogsPageReducer";
import {DialogsContainerPropsType} from "./DialogsContainer";


// type DialogsPropsType = {
//     updateNewMessageText: (text: string) => void;
//     addMessage: () => void;
//     dialogsPage: DialogsPagePropsType
// };

const Dialogs: FC<DialogsContainerPropsType> = (props) => {
    const dialogElement = props.dialogsPage.dialogData.map((dialog) => (
        <DialogItem dialogData={dialog} />
    ));

    const messageElement = props.dialogsPage.messageData.map((message) => (
        <MessageItem messageData={message} />
    ));

    const newMessageElement = React.createRef<HTMLTextAreaElement>();

    const addMessageHandler = () => {
        props.addMessage();
    };

    const onChangeTextHandler = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value;
            props.updateNewMessageText(text);
        }
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>{dialogElement}</div>
            <div className={s.messages}>
                {messageElement}
                <div className={s.textarea}>
                    <div>
                        <textarea
                            onChange={onChangeTextHandler}
                            ref={newMessageElement}
                            value={props.dialogsPage.newMessageText}
                        ></textarea>
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
