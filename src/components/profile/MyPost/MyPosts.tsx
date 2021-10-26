import React from "react";

import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {likeCountType} from "../../../Redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm,} from "redux-form";


type myPostsPropsType = {
    likesCount: Array<likeCountType>,
    addPost: (addNewPost: string) => void
}
type PostFormType = {
    addNewPost: string
}

export const MyPosts = (props: myPostsPropsType) => {

    let postElement = props.likesCount.map(m => <Post message={m.message} key={m.id} count={m.count}/>);


    let onAddPost = (val: PostFormType) => {
        props.addPost(val.addNewPost);
    }


    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <MyNewReduxPost onSubmit={onAddPost}/>
            </div>
            <div className={s.item}>
                {postElement}

            </div>
        </div>
    );

}
export const MyNewPost: React.FC<InjectedFormProps<PostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'addNewPost'} placeholder={'your post should be here'}/>
            </div>
            <div>
                <button> Add post</button>
            </div>
        </form>
    )
}
export const MyNewReduxPost = reduxForm<PostFormType>({form: 'profileAddPostForm'})(MyNewPost)