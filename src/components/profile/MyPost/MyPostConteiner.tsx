import React from "react";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import {addPostActionCreator, updateNewTextActionCreator} from "../../../Redux/profile-reducer";


export type mapDispatchToPropsPostType = {
    addPost: () => void;
    updateNewText: (text: string) => void;
}

let mapStateToProps = (state: RootReduxStoreType) => {
    return {
        newPostText: state.profilePage.newPostText,
        likesCount: state.profilePage.likesCount
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsPostType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewText: (text: string) => {
            let action = updateNewTextActionCreator(text);
            dispatch(action)
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


