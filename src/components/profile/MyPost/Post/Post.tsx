import React from "react";
import s from './Post.module.css';

type postType={
    message: string,
    count: number
}
export const Post = (props: postType) => {
    return (


                <div className={s.item}>
                    <img src='https://shapka-youtube.ru/wp-content/uploads/2021/03/mrachnaya-avatarka-dlya-parney.jpg'/>
                    {props.message}
                    <div>
                      <span> Likes </span>  {props.count}
                    </div>
                </div>

    );
        }
