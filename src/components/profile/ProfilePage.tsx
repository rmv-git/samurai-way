import React, {ChangeEvent, useState} from "react";
import classes from "./ProfilePage.module.css";
import {ProfileDescription} from "./description/ProfileDescription";
import {PostType} from "../../types/types";
import {Posts} from "./posts/Posts";

type PropsType = {
    arrayPosts: Array<PostType>;
    addPost: (value: string) => void;
    updateNewPostText: (value: string) => void;
}

export const ProfilePage = (props: PropsType) => {

    const [value, setValue] = useState<string>('');

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        // setValue(event.currentTarget.value);
        props.updateNewPostText(event.currentTarget.value)
    }

    let textAreaPostText = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (textAreaPostText.current) {
            props.addPost(textAreaPostText.current.value);
            textAreaPostText.current.value = ''
        }
    }
    // const addPost = () => {
    //     props.addPost(value);
    //     setValue('');
    // }

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
