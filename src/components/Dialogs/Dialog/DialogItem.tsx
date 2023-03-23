import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";
import { DialogDataPropsType } from "../../../redux/redux-store";

type DialogItemPropsType = {
    dialogData: DialogDataPropsType;
};

export const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    const path = "/dialogs/" + props.dialogData.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                <img src={props.dialogData.ava} alt="" />
                {props.dialogData.name}
            </NavLink>
        </div>
    );
};
