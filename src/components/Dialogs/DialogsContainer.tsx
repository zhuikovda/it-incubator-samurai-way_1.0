import React, { FC } from 'react';
import { AppStateType } from '../../redux/redux-store';
import { AddMessageAC, DialogsPagePropsType, UpdateNewMessageTextAC } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { type } from 'os';

// type DialogsPropsType = {
//     stateDialogs: DialogsPagePropsType;
//     dispatch: (action: ActionTypesAC) => void;
// };

// const DialogsContainer: FC<DialogsPropsType> = (props) => {
//     return <StoreContext.Consumer>
//         {store => {

//             const addMessageHandler = () => {
//                 store.dispatch(AddMessageAC());
//             };
//             const onChangeTextHandler = (text: string) => {
//                 store.dispatch(UpdateNewMessageTextAC(text));
//             };
//             return <Dialogs updateNewMessageText={onChangeTextHandler}
//                 addMessage={addMessageHandler}
//                 dialogsPage={store.getState().dialogsPage} />;
//         }}
//     </StoreContext.Consumer>;
// };

type MapStateToPropsType = {
    dialogsPage: DialogsPagePropsType;
};

type MapDispatchToPropsType = {
    addMessage: () => void;
    updateNewMessageText: (text: string) => void;
};

export type DialogsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    };
};

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(AddMessageAC());
        },
        updateNewMessageText: (text: string) => {
            dispatch(UpdateNewMessageTextAC(text));
        }
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
