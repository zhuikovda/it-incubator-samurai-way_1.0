import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

// type messagePropsType = {
//     message: string;
// };

export const MessageItem = (props: any) => {
    const messageClass = props.position ? s.messages_left : s.messages_right;
    return (
        <div>
            <div className={messageClass}>
                <img src={props.ava} alt="" />
                {props.message}
            </div>
        </div>
    );
};

// export default MessageItem;
