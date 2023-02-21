const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="../HomeScreen/index.html" class="d-none d-xl-block d-xxl-block list-group-item list-group-item-action ${isActive(active, 'Home')}">
                    <i class="fas fa-home"></i>
                        Home
                </a>
                <a href="../HomeScreen/index.html" class="d-xl-none list-group-item list-group-item-action ${isActive(active, 'Home')}">
                    <i class="fas fa-home"></i>
                </a>
                <a href="../ExploreScreen/index.html" class="d-none d-xl-block d-xxl-block list-group-item list-group-item-action ${isActive(active, 'Explore')}">
                    <i class="fas fa-hashtag"></i>
                        Explore
                </a>
                <a href="../ExploreScreen/index.html" class="d-xl-none list-group-item list-group-item-action ${isActive(active, 'Explore')}">
                    <i class="fas fa-hashtag"></i>
                </a>
                <a href="#" class="d-none d-xl-block d-xxl-block list-group-item list-group-item-action ${isActive(active, 'Notifications')}">
                    <i class="fas fa-bell"></i>
                        Notifications
                </a>
                <a href="#" class="d-xl-none list-group-item list-group-item-action ${isActive(active, 'Notifications')}">
                    <i class="fas fa-bell"></i>
                </a>
                <a href="#" class="d-none d-xl-block d-xxl-block list-group-item list-group-item-action ${isActive(active, 'Messages')}">
                    <i class="fas fa-envelope"></i>
                        Messages
                </a>
                <a href="#" class="d-xl-none list-group-item list-group-item-action ${isActive(active, 'Messages')}">
                    <i class="fas fa-envelope"></i>
                </a>
                <a href="#" class="d-none d-xl-block d-xxl-block list-group-item list-group-item-action ${isActive(active, 'Bookmarks')}">
                    <i class="fas fa-bookmark"></i>
                        Bookmarks
                </a>
                <a href="#" class="d-xl-none list-group-item list-group-item-action ${isActive(active, 'Bookmarks')}">
                    <i class="fas fa-bookmark"></i>
                </a>
                <a href="#" class="d-none d-xl-block d-xxl-block list-group-item list-group-item-action ${isActive(active, 'Lists')}">
                    <i class="fas fa-list"></i>
                        Lists
                </a>
                <a href="#" class="d-xl-none list-group-item list-group-item-action ${isActive(active, 'Lists')}">
                    <i class="fas fa-list"></i>
                </a>
                <a href="#" class="d-none d-xl-block d-xxl-block list-group-item list-group-item-action ${isActive(active, 'Profile')}">
                    <i class="fas fa-user"></i>
                        Profile
                </a>
                <a href="#" class="d-xl-none list-group-item list-group-item-action ${isActive(active, 'Profile')}">
                    <i class="fas fa-user"></i>
                </a>
                <a href="#" class="d-none d-xl-block d-xxl-block list-group-item list-group-item-action ${isActive(active, 'More')}">
                    <i class="fas fa-info-circle"></i>
                        More
                </a>
                <a href="#" class="d-xl-none list-group-item list-group-item-action ${isActive(active, 'More')}">
                    <i class="fas fa-info-circle"></i>
                </a>
            </div>
        </div>

        <div class="d-grid mt-2">
            <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">
                    Tuit
            </a>
        </div>
    `);
}

const isActive = (expected, current) => {
    return current === expected ? 'active' : '';
}

export default NavigationSidebar;