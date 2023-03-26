

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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

export type ActionTypesDialogsAC = AddMessageACType | UpdateNewMessageTextACType;

const dialogsPageReducer = (state: DialogsPagePropsType = initialState, action: ActionTypesDialogsAC): DialogsPagePropsType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageDataPropsType = {
                id: 7,
                message: state.newMessageText,
                leftEdge: true,
                ava: ""
            };
            let stateCopy = {...state}
            stateCopy.messageData =[...state.messageData]
            stateCopy.messageData.push(newMessage);
            stateCopy.newMessageText = "";
            return stateCopy;

        case UPDATE_NEW_MESSAGE_TEXT:
            let stateCopyMessage = {...state}
            stateCopyMessage.newMessageText = action.newMessage;
            return stateCopyMessage;

        default:
            return state;
    }
};

export type AddMessageACType = ReturnType<typeof AddMessageAC>;
export const AddMessageAC = () => {
    return {
        type: ADD_MESSAGE
    } as const;
};

export type UpdateNewMessageTextACType = ReturnType<typeof UpdateNewMessageTextAC>;
export const UpdateNewMessageTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text
    } as const;
};

export default dialogsPageReducer;
