export type StatePropsType = {
    dialogsPage: DialogsPagePropsType;
    profilePage: ProfilePagePropsType;
    sidebarFriends: SidebarFriendsPropsType;
};

export type DialogsPagePropsType = {
    dialogData: DialogDataPropsType[];
    messageData: MessageDataPropsType[];
    newMessageText: string;
};

export type DialogDataPropsType = {
    id: number;
    name: string;
    ava: string;
};

export type MessageDataPropsType = {
    id: number;
    message: string;
    leftEdge: boolean;
    ava: string;
};

export type ProfilePagePropsType = {
    postData: PostDataPropsType[];
    newPostText: string;
};

type PostDataPropsType = {
    id: number;
    message: string;
    likesCount: number;
};

export type SidebarFriendsPropsType = {
    title: string;
    friends: FriendsPropsType[];
};

type FriendsPropsType = {
    id: number;
    name: string;
    ava: string;
};

export type StoreType = {
    _renderEntireTree: () => void;
    _state: StatePropsType;
    addPost: () => void;
    updateNewPostText: (newText: string) => void;
    addMessage: () => void;
    updateNewMassageText: (newMessage: string) => void;
    subscribe: (observer: () => void) => void;
    getState:()=>StatePropsType    
};

export const store: StoreType = {
    _renderEntireTree() {},
    _state: {
        dialogsPage: {
            dialogData: [
                {
                    id: 1,
                    name: "Dima",
                    ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU"
                },
                {
                    id: 2,
                    name: "Sveta",
                    ava: "https://cs10.pikabu.ru/post_img/big/2018/02/23/11/1519415820143773252.jpg"
                },
                {
                    id: 3,
                    name: "Eva",
                    ava: "https://abrakadabra.fun/uploads/posts/2022-01/1643232514_4-abrakadabra-fun-p-milie-multyashnie-personazhi-14.jpg"
                },
                {
                    id: 4,
                    name: "Sasha",
                    ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDBnrRXqeRQQYomhlo_sYKcUF0PwGRbzBt0QrSD9jAFv4GmQ2rs6OHiiRcUMm1KoeoWg&usqp=CAU"
                },
                {
                    id: 5,
                    name: "Eva",
                    ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Xswv-3d6tsRAw-Kkjqcj59OI6SnQ4FEeLMAiB_JxZdqiQ64OldtNRRvCOKLeLPihcoM&usqp=CAU"
                },
                {
                    id: 6,
                    name: "Zina",
                    ava: "https://ic.pics.livejournal.com/b_picture/19184119/779124/779124_900.jpg"
                }
            ],
            messageData: [
                {
                    id: 1,
                    message: "Hi!",
                    leftEdge: true,
                    ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU"
                },
                {
                    id: 2,
                    message: "How are yo",
                    leftEdge: false,
                    ava: "https://cs10.pikabu.ru/post_img/big/2018/02/23/11/1519415820143773252.jpg"
                },
                {
                    id: 3,
                    message: "Hello!",
                    leftEdge: true,
                    ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU"
                },
                {
                    id: 4,
                    message: "I'am fine!",
                    leftEdge: false,
                    ava: "https://cs10.pikabu.ru/post_img/big/2018/02/23/11/1519415820143773252.jpg"
                },
                {
                    id: 5,
                    message: "Good bye!",
                    leftEdge: true,
                    ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU"
                },
                {
                    id: 6,
                    message: "Good luck !",
                    leftEdge: false,
                    ava: "https://cs10.pikabu.ru/post_img/big/2018/02/23/11/1519415820143773252.jpg"
                }
            ],
            newMessageText: "Hi, dima!"
        },
        profilePage: {
            postData: [
                { id: 1, message: "Hi, Dima!", likesCount: 15 },
                { id: 2, message: "Hi, Eva!", likesCount: 20 }
            ],
            newPostText: "Hi, Sveta!"
        },
        sidebarFriends: {
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
        }
    },
    addPost() {
        const newPost: PostDataPropsType = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 18
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._renderEntireTree();
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._renderEntireTree();
    },
    addMessage() {
        const newMessage: MessageDataPropsType = {
            id: 7,
            message: this._state.dialogsPage.newMessageText,
            leftEdge: true,
            ava: ""
        };
        this._state.dialogsPage.messageData.push(newMessage);
        this._state.dialogsPage.newMessageText = "";
        this._renderEntireTree();
    },
    updateNewMassageText(newMessage: string) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._renderEntireTree();
    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    },
    getState() {
        return this._state;
    }
};
// store.addPost()

//Рабочий вариант

// let renderEntireTree = ()=>{}

// export type StatePropsType = {
//     dialogsPage: DialogsPagePropsType;
//     profilePage: ProfilePagePropsType;
//     sidebarFriends: SidebarFriendsPropsType;
// };

// export type DialogsPagePropsType = {
//     dialogData: DialogDataPropsType[];
//     messageData: MessageDataPropsType[];
//     newMessageText: string;
// };

// export type DialogDataPropsType = {
//     id: number;
//     name: string;
//     ava: string;
// };

// export type MessageDataPropsType = {
//     id: number;
//     message: string;
//     leftEdge: boolean;
//     ava: string;
// };

// export type ProfilePagePropsType = {
//     postData: PostDataPropsType[];
//     newPostText: string;
// };

// type PostDataPropsType = {
//     id: number;
//     message: string;
//     likesCount: number;
// };

// export type SidebarFriendsPropsType = {
//     title: string;
//     friends: FriendsPropsType[];
// };

// type FriendsPropsType = {
//     id: number;
//     name: string;
//     ava: string;
// };

// export const state: StatePropsType = {
//     dialogsPage: {
//         dialogData: [
//             {
//                 id: 1,
//                 name: "Dima",
//                 ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU"
//             },
//             {
//                 id: 2,
//                 name: "Sveta",
//                 ava: "https://cs10.pikabu.ru/post_img/big/2018/02/23/11/1519415820143773252.jpg"
//             },
//             {
//                 id: 3,
//                 name: "Eva",
//                 ava: "https://abrakadabra.fun/uploads/posts/2022-01/1643232514_4-abrakadabra-fun-p-milie-multyashnie-personazhi-14.jpg"
//             },
//             {
//                 id: 4,
//                 name: "Sasha",
//                 ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReDBnrRXqeRQQYomhlo_sYKcUF0PwGRbzBt0QrSD9jAFv4GmQ2rs6OHiiRcUMm1KoeoWg&usqp=CAU"
//             },
//             {
//                 id: 5,
//                 name: "Eva",
//                 ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Xswv-3d6tsRAw-Kkjqcj59OI6SnQ4FEeLMAiB_JxZdqiQ64OldtNRRvCOKLeLPihcoM&usqp=CAU"
//             },
//             {
//                 id: 6,
//                 name: "Zina",
//                 ava: "https://ic.pics.livejournal.com/b_picture/19184119/779124/779124_900.jpg"
//             }
//         ],
//         messageData: [
//             {
//                 id: 1,
//                 message: "Hi!",
//                 leftEdge: true,
//                 ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU"
//             },
//             {
//                 id: 2,
//                 message: "How are yo",
//                 leftEdge: false,
//                 ava: "https://cs10.pikabu.ru/post_img/big/2018/02/23/11/1519415820143773252.jpg"
//             },
//             {
//                 id: 3,
//                 message: "Hello!",
//                 leftEdge: true,
//                 ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU"
//             },
//             {
//                 id: 4,
//                 message: "I'am fine!",
//                 leftEdge: false,
//                 ava: "https://cs10.pikabu.ru/post_img/big/2018/02/23/11/1519415820143773252.jpg"
//             },
//             {
//                 id: 5,
//                 message: "Good bye!",
//                 leftEdge: true,
//                 ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU"
//             },
//             {
//                 id: 6,
//                 message: "Good luck !",
//                 leftEdge: false,
//                 ava: "https://cs10.pikabu.ru/post_img/big/2018/02/23/11/1519415820143773252.jpg"
//             }
//         ],
//         newMessageText: "Hi, dima!"
//     },
//     profilePage: {
//         postData: [
//             { id: 1, message: "Hi, Dima!", likesCount: 15 },
//             { id: 2, message: "Hi, Eva!", likesCount: 20 }
//         ],
//         newPostText: "Hi, dima!"
//     },
//     sidebarFriends: {
//         title: "Friends",
//         friends: [
//             {
//                 id: 1,
//                 name: "Sergei",
//                 ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3UV9nJRhZE6mkae7sogh0WSO_amejPEeaw&usqp=CAU"
//             },
//             {
//                 id: 2,
//                 name: "Roma",
//                 ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbs1TtuxFoJfb-iTaBhAL7bl5TxkM78U2YMg&usqp=CAU"
//             },
//             {
//                 id: 3,
//                 name: "Lenya",
//                 ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsz2eWio9nR72fvHTWnkCjcqQxwYHTTxm87Q&usqp=CAU"
//             }
//         ]
//     }
// };

// export const addPost = () => {
//     const newPost: PostDataPropsType = {
//         id: 3,
//         message: state.profilePage.newPostText,
//         likesCount: 18
//     };
//     state.profilePage.postData.push(newPost);
//     state.profilePage.newPostText = "";
//     renderEntireTree();
// };

// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText;
//     renderEntireTree();
// };

// export const addMessage = () => {
//     const newMessage: MessageDataPropsType = {
//         id: 7,
//         message: state.dialogsPage.newMessageText,
//         leftEdge: true,
//         ava: ""
//     };
//     state.dialogsPage.messageData.push(newMessage);
//     state.dialogsPage.newMessageText = "";
//     renderEntireTree();
// };

// export const updateNewMassageText = (newMessage: string) => {
//     state.dialogsPage.newMessageText = newMessage;
//     renderEntireTree();
// };

// export const subscribe = (observer: ()=>void) => {
// renderEntireTree=observer
// }
