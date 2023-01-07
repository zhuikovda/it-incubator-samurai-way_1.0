import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import { DialogItem } from "./Dialog/DialogItem";
import { MessageItem } from "./Messages/MessageItem";

const Dialogs = (props: any) => {
    const dialogElement = props.stateDialogs.dialogData.map((dialog: any) => (
        <DialogItem name={dialog.name} id={dialog.id} ava={dialog.ava} />
    ));
   

    const messageElement = props.stateDialogs.messageData.map((message: any) => (
        <MessageItem message={message.message} position = {message.leftEdge} ava ={message.ava}/>
    ));

    return (
        <div className={s.dialogs}>
            {/* <h1>Dialogs</h1>                 */}
            <div className={s.dialogsItem}>{dialogElement}</div>
            <div className={s.messages}>{messageElement}</div>
        </div>
    );
};

// const Message = (props: messagePropsType) => {
//     return (
//         <div>
//             <MessageItem />
//         </div>
//     )
// }

export default Dialogs;
