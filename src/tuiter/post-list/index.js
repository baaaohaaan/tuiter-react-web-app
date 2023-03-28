import React from "react";
import PostItem from "./post-item";
import {useSelector} from "react-redux";

const PostList = () => {
    // replaced by /tuits/tuit-list.js

    const postsArray = useSelector(state => state.tuits)
    return (
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostList;