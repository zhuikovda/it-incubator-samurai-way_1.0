import React from "react"
import {NavLink} from "react-router-dom"
import s from "./Dialogs.module.css"

type dialogPropsType = {
    name: string
    id: string
}

type messagePropsType = {
    message: string
}

const DialogItem = (props: dialogPropsType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </div>
    )
}

const MessageItem = (props: messagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            {/* <h1>Dialogs</h1>                 */}
            <div className={s.dialogsItem}>
                <DialogItem name={"Dima"} id="1" />
                <DialogItem name={"Sveta"} id="2" />
                <DialogItem name={"Eva"} id="3" />
                <DialogItem name={"Sasha"} id="4" />
                <DialogItem name={"Eva"} id="5" />
                <DialogItem name={"Zina"} id="6" />
            </div>
            <div className={s.messages}>
                <MessageItem message="Hi!" />
                <MessageItem message="How are you?" />
                <MessageItem message="Hello!" />
                <MessageItem message="I'am fine!" />
                <MessageItem message="Good bye!" />
            </div>
        </div>
    )
}

// const Message = (props: messagePropsType) => {
//     return (
//         <div>
//             <MessageItem />
//         </div>
//     )
// }

export default Dialogs
