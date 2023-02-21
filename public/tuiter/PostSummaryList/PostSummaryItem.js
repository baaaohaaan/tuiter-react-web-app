const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-8">
                    <div class="text-secondary">
                        ${post.topic}
                    </div>
                    <div>
                        <p class="fw-bolder">${post.userName} <i class="far fa-check-circle"></i> <span class="text-white-50"> - ${post.time}</span></p>
                    </div>
                    <div class="fw-bolder">
                        ${post.title}
                    </div>
                </div>
                <div class="col-4">
                    <img class="float-end" src="${post.image}" height="100px">
                </div>
            </div>
        </li>
    `)
}

export default PostSummaryItem;