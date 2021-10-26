import React from "react";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootReduxStoreType} from "../../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import {addPostActionCreator} from "../../../Redux/profile-reducer";


export type mapDispatchToPropsPostType = {
    addPost: (addNewPost: string) => void

}

let mapStateToProps = (state: RootReduxStoreType) => {
    return {
        likesCount: state.profilePage.likesCount
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsPostType => {
    return {
        addPost: (addNewPost) => {
            dispatch(addPostActionCreator(addNewPost))

        }
    }
}

export const MyPostsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps))
(MyPosts);


