import { SidebarFriendsPropsType } from "./redux-store";

let initialState = {
    title: "Friends",
    friends: [
        {
            id: 1,
            name: "Sergei",
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3UV9nJRhZE6mkae7sogh0WSO_amejPEeaw&usqp=CAU"
        },
        {
            id: 2,
            name: "Roma",
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbs1TtuxFoJfb-iTaBhAL7bl5TxkM78U2YMg&usqp=CAU"
        },
        {
            id: 3,
            name: "Lenya",
            ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsz2eWio9nR72fvHTWnkCjcqQxwYHTTxm87Q&usqp=CAU"
        }
    ]
};

export type ActionTypesAC = "";

const sidebarFriendsReducer = (
    state: SidebarFriendsPropsType = initialState,
    action: ActionTypesAC
) => {
    return state;
};

export default sidebarFriendsReducer;
