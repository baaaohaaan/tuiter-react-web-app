const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img src="${who.avatarIcon}" height="50px" width="50px" class="rounded-circle">
                </div>
                <div class="col-6">
                    <div class="fw-bolder">
                        ${who.userName}
                    </div>
                    <div class="text-secondary">
                        ${who.handle}
                    </div>
                </div>
                <div class="col-3">
                    <button class="btn btn-primary override-bs">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    `)
}

export default WhoToFollowListItem;