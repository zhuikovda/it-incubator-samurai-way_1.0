import React from "react";

export const SidebarFriends = (props: any) => {
    // const messageElement = props.stateDialogs.messageData.map((message: any) => (
    //     <SidebarFiends message={message.message} position = {message.leftEdge} ava ={message.ava}/>
    // ));
    return (
        <div>
            <div>{props.friends}</div>
        </div>
    );
};
