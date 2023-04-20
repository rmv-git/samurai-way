import React from 'react';
import {PostType} from "../../../types/types";
import {Post} from "./post/Post";

type PropsType = {
    posts: Array<PostType>;
}
export const Posts = (props: PropsType) => {
    return (
        <div>
            <h3>
                My posts:
            </h3>
                {
                    props.posts.map((post: PostType) => <Post post={post} key={post.id}/>)
                }
        </div>
    );
};
