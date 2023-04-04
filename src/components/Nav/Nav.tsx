import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./Nav.module.css";



type NavPropsType = {
    stateSidebarFriends: SidebarFriendsPropsType;
};

type SidebarFriendsPropsType = {
    title: string;
    friends: FriendsPropsType[];
};

type FriendsPropsType = {
    id: number;
    name: string;
    ava: string;
};

const Nav: React.FC<NavPropsType> = (props) => {
    const sidebarFriendsElement = props.stateSidebarFriends.friends.map((t: any) => (
        <span className={cl.sidebar_friends}>
            <img src={t.ava} alt="" />
            {t.name}
        </span>
    ));
    return (
        <div className={cl.nav}>
            <nav>
                <ul>
                    <li className={cl.item}>
                        <NavLink to="/profile" activeClassName={cl.active}>
                            Profile
                        </NavLink>
                    </li>
                    <li className={cl.item}>
                        <NavLink to="/dialogs" activeClassName={cl.active}>
                            Messages
                        </NavLink>
                    </li>
                    <li className={cl.item}>
                        <NavLink to="/news" activeClassName={cl.active}>
                            News
                        </NavLink>
                    </li>
                    <li className={cl.item}>
                        <NavLink to="/music" activeClassName={cl.active}>
                            Music
                        </NavLink>
                    </li>
                    <li className={cl.item}>
                        <NavLink to="/settings" activeClassName={cl.active}>
                            Settings
                        </NavLink>
                    </li>
                    <li className={cl.item}>
                        <NavLink to="/users" activeClassName={cl.active}>
                            Users
                        </NavLink>
                    </li>
                </ul>
                <div className={cl.sidebar_title}>{props.stateSidebarFriends.title}</div>
                <div className={cl.wrapper__sidebar_friends}>{sidebarFriendsElement}</div>
            </nav>
        </div>
    );
};
export default Nav;
