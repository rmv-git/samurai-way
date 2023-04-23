import React, {ChangeEvent, useState} from "react";
import classes from "./ProfilePage.module.css";
import {ProfileDescription} from "./description/ProfileDescription";
import {PostType} from "../../types/types";
import {Posts} from "./posts/Posts";
import {ActionsType, addPostAC, updateNewPostTextAC} from "../../types/actions";

type PropsType = {
    arrayPosts: Array<PostType>;
    dispatch: (action: ActionsType) => void;
}

export const ProfilePage = (props: PropsType) => {

    const [value, setValue] = useState('');

    // const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //     // props.dispatch({type: 'UPDATE_NEW_POST_TEXT', value: event.currentTarget.value});
    //     props.dispatch(updateNewPostTextAC(event.currentTarget.value));
    // }

    // let textAreaPostText = React.createRef<HTMLTextAreaElement>();
    //
    // const addPost = () => {
    //     if (textAreaPostText.current) {
    //         // props.dispatch({type: 'ADD_POST'})
    //         props.dispatch(addPostAC());
    //         textAreaPostText.current.value = ''
    //     }
    // }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.currentTarget.value);
    }
    const addPost = () => {
        props.dispatch(addPostAC(value));
        setValue('');
    }

    return (
        <div className={classes.content}>
            <ProfileDescription/>
            <Posts posts={props.arrayPosts}/>
            <div>
                <textarea value={value} onChange={onChangeHandler}/>
                <button onClick={addPost}>Add</button>
            </div>
        </div>
    );
}
