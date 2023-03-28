import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitItem = (
    {
        post = {
            "_id": 123,
            "topic": "Space",
            "headshot": "/elon-musk.png",
            "userName": "Elon Musk",
            "handle": "@elonmusk",
            "time": "23h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "tuit": "Amazing show about @Inspiration4x mission!",
            "image": "/space-man.jpg",
            "link": "netflix.com",
            "linkHeading": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "linkSummary": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={70} height={70} className="rounded-circle float-start" src={`/images/${post.headshot}`} alt="avatar"/>
                </div>
                <div className="col-10">
                    <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(post._id)}></i>
                    <div><p className="fw-bold">{post.userName} <i className="bi bi-patch-check-fill" style={{color:'dodgerblue'}}/> <span style={{color:'gray'}}>{post.handle} · {post.time}</span> <i className="bi bi-three-dots float-end"/> </p></div>
                    <div>{post.tuit}</div>
                    {hasImage(post)}
                    {hasLink(post)}
                    <TuitStats key={post._id} post={post}/>
                </div>
            </div>
        </li>
    );
};

const hasLink = (post) => {
    if (post.link !== '') {
        return (
            <div className="border-solid border-color border-thin border-top-only">
                <hr/>
                <p className="text-padded white-bold-title fw-bold">{post.linkHeading}
                    <br/>
                    <span className="handle-color white-light-title">{post.linkSummary}</span>
                </p>
            </div>
        );
    }
};

const hasImage = (post) => {
    if (post.image !== '') {
        return (
            <div>
                <img width="100%" className="rounded-3" src={`/images/${post.image}`} alt="post"/>
            </div>
        );
    }
};

export default TuitItem;