import React from "react"
import cl from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className={cl.content}>
            <div>
                <img src="https://wallpaperaccess.com/full/4762573.jpg"></img>
            </div>
            <div className={cl.info}>ava + description</div>
        </div>
    )
}

export default ProfileInfo
