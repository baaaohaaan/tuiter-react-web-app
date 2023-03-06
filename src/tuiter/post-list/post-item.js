import React from "react";

const PostItem = (
    {
        post = {
            "_id": 123,
            "headshot": "/images/elon-musk.png",
            "userName": "Elon Musk",
            "handle": "@elonmusk",
            "time": "23h",
            "tuit": "Amazing show about @Inspiration4x mission!",
            "image": "/images/space-man.jpg",
            "link": "netflix.com",
            "linkHeading": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "linkSummary": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
            "comment": "4.2K",
            "retuit": "3.5K",
            "like": "37.5K"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={70} height={70} className="rounded-circle float-start" src={post.headshot} alt="Avatar"/>
                </div>
                <div className="col-10">
                    <div><p className="fw-bold">{post.userName} <i className="bi bi-patch-check-fill" style={{color:'dodgerblue'}}/> <span style={{color:'gray'}}>{post.handle} · {post.time}</span> <i className="bi bi-three-dots float-end"/> </p></div>
                    <div>{post.tuit}</div>
                    <div>
                        <img width="100%" className="rounded-3" src={post.image} alt="post"/>
                    </div>
                    {hasLink(post)}
                    <div className="row mt-3">
                        <div className="col-3">
                            <i className="bi bi-chat" /> {post.comment}
                        </div>
                        <div className="col-3">
                            <i className="bi bi-share col-3" /> {post.retuit}
                        </div>
                        <div className="col-3">
                            <i className="bi bi-heart col-3" /> {post.like}
                        </div>
                        <div className="col-3">
                            <i className="bi bi-send col-3" />
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
const hasLink = (post) => {
    if (post.link != '') {
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
export default PostItem;