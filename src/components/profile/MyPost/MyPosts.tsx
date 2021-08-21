import React from "react";

import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {likeCountType} from "../../../Redux/profile-reducer";


type myPostsPropsType = {
    likesCount: Array<likeCountType>,
    newPostText:  string,
    updateNewText: (text: string) => void,
    addPost:() => void
}


export const MyPosts = (props: myPostsPropsType) => {

    let postElement = props.likesCount.map(m => <Post message={m.message} key={m.id} count={m.count}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewText(text);
        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
                <div>
                    <button onClick={onAddPost}> Add post</button>
                </div>
            </div>
            <div className={s.item}>
                {postElement}

            </div>
        </div>
    );

}
