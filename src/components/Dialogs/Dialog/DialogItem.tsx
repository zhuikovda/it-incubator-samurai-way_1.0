import React from "react";
import { NavLink } from "react-router-dom";
import {DialogDataPropsType} from "../../../redux/dialogsPageReducer";
import s from "./../Dialogs.module.css";


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
