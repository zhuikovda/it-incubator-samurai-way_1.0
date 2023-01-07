import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

// type DialogPropsType = {
//     name: string;
//     id: number;
// };

export const DialogItem = (props: any) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                <img src={props.ava} alt="" />
                {props.name}
            </NavLink>
        </div>
    );
};

// export default DialogItem;
