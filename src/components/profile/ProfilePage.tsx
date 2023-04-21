import React, {ChangeEvent} from "react";
import classes from "./ProfilePage.module.css";
import {ProfileDescription} from "./description/ProfileDescription";
import {PostType} from "../../types/types";
import {Posts} from "./posts/Posts";
import {ActionsType} from "../../types/actions";

type PropsType = {
    arrayPosts: Array<PostType>;
    dispatch: (action: ActionsType) => void;
}

export const ProfilePage = (props: PropsType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: 'UPDATE_NEW_POST_TEXT', value: event.currentTarget.value});
    }

    let textAreaPostText = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (textAreaPostText.current) {
            props.dispatch({type: 'ADD_POST'})
            textAreaPostText.current.value = ''
        }
    }

    return (
        <div className={classes.content}>
            <ProfileDescription/>
            <Posts posts={props.arrayPosts}/>
            <div>
                <textarea ref={textAreaPostText} onChange={onChangeHandler}/>
                <button onClick={addPost}>Add</button>
            </div>
        </div>
    );
}
