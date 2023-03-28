import React from "react";

const TuitStats = (
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
        <div className="row mt-3">
            <div className="col-3">
                <i className="bi bi-chat" /> {post.replies}
            </div>
            <div className="col-3">
                <i className="bi bi-share col-3" /> {post.retuits}
            </div>
            <div className="col-3">
                <i className={`${post.liked === true ? 'bi bi-heart-fill col-3' : 'bi bi-heart col-3'}`} style={{color: `${post.liked === true ? 'red' : ''}`}} /> {post.likes}
            </div>
            <div className="col-3">
                <i className="bi bi-send col-3" />
            </div>
        </div>
    );
};
export default TuitStats;