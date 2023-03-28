import React from "react";

const PostSummaryItem = (
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
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{post.userName} · {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.headshot}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;