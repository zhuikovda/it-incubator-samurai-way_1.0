import React, { FC } from "react";
import s from "./../Dialogs.module.css";
import { MessageDataPropsType } from "../../../redux/state";

type MessageItemPropsType = {
    messageData: MessageDataPropsType;
};

export const MessageItem: FC<MessageItemPropsType> = (props) => {
    const messageClass = props.messageData.leftEdge ? s.messages_left : s.messages_right;
    return (
        <div>
            <div className={messageClass}>
                <img src={props.messageData.ava} alt="" />
                {props.messageData.message}
            </div>
        </div>
    );
};


