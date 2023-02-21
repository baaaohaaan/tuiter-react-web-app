const PostItem = (post) => {
    return(`
        <div class="pos-relative">
            <div>
                <img class="pos-relative-headshot user-img-round " src="${post.headshot}">
            </div>
            <div class="pos-relative-nudge-up-right mt-3">
                <p class="title-font-color author-font-size">${post.userName}
                    <span class="handle-color">${post.handle} · ${post.time}</span>
                </p>
            </div>
            <div class="pos-relative-nudge-up-right-main-text main-text-dimension">
                <p class="title-font-color author-font-size main-text-margin">
                    ${post.tuit}
                </p>
            </div>
            <div class="grid-row pos-lecture-img border-solid border-color border-thin dimension-lecture rounded-corners-all-around">
                <div>
                    <img class="lecture-img-round" src="${post.image}">
                </div>
                ${hasLink(post)}
                <div class="grid-margin-top grid-col-one-four-page">
                    <i href="#" class="fas fa-comment" style="color: lightgray"> ${post.comment}</i>
                </div>
                <div class="grid-margin-top grid-col-one-four-page">
                    <i href="#" class="fas fa-share" style="color: lightgray"> ${post.retweet}</i>
                </div>
                <div class="grid-margin-top grid-col-one-four-page">
                    <i href="#" class="fas fa-heart" style="color: lightgray"> ${post.like}</i>
                </div>
                <div class="grid-margin-top grid-col-one-four-page">
                    <i href="'#" class="fas fa-share-square" style="color: lightgray"></i>
                </div>
            </div>
        </div>
        <hr>
    `)
}

const hasLink = (post) => {
    if (post.link != '') {
        return (`
            <div class="border-solid border-color border-thin border-top-only">
                <p class="text-padded white-bold-title author-font-size">${post.linkHeading}
                    <br>
                    <span class="handle-color white-light-title">${post.linkSummary}</span>
                </p>
            </div>
        `)
    } else {
        return (``)
    }
}

export default PostItem;