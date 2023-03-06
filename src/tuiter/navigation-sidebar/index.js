import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <>
            <div className="list-group">
                {/*Tuiter*/}
                <Link to="#" className="d-xl-none list-group-item list-group-item-action">
                    <i className="bi bi-twitter"></i>
                </Link>
                <Link to="#" className="d-none d-xl-block d-xxl-block list-group-item list-group-item-action">
                    <i className="bi bi-twitter"></i>
                    Tuiter
                </Link>

                {/*Home*/}
                <Link to="/tuiter/home" className={`d-xl-none list-group-item list-group-item-action ${active === 'home'?'active':''}`}>
                    <i className="bi bi-house-fill"></i>
                </Link>
                <Link to="/tuiter/home" className={`d-none d-xl-block d-xxl-block list-group-item list-group-item-action ${active === 'home'?'active':''}`}>
                    <i className="bi bi-house-fill"></i>
                    Home
                </Link>

                {/*Explore*/}
                <Link to="/tuiter/explore" className={`d-xl-none list-group-item list-group-item-action ${active === 'explore'?'active':''}`}>
                    <i className="bi bi-hash"></i>
                </Link>
                <Link to="/tuiter/explore" className={`d-none d-xl-block d-xxl-block list-group-item list-group-item-action ${active === 'explore'?'active':''}`}>
                    <i className="bi bi-hash"></i>
                    Explore
                </Link>

                {/*Notifications*/}
                <Link to="#" className={`d-xl-none list-group-item list-group-item-action ${active === 'notifications'?'active':''}`}>
                    <i className="bi bi-bell-fill"></i>
                </Link>
                <Link to="#" className={`d-none d-xl-block d-xxl-block list-group-item list-group-item-action ${active === 'notifications'?'active':''}`}>
                    <i className="bi bi-bell-fill"></i>
                    Notifications
                </Link>

                {/*Messages*/}
                <Link to="#" className={`d-xl-none list-group-item list-group-item-action ${active === 'messages'?'active':''}`}>
                    <i className="bi bi-envelope-fill"></i>
                </Link>
                <Link to="#" className={`d-none d-xl-block d-xxl-block list-group-item list-group-item-action ${active === 'messages'?'active':''}`}>
                    <i className="bi bi-envelope-fill"></i>
                    Messages
                </Link>

                {/*Bookmarks*/}
                <Link to="#" className={`d-xl-none list-group-item list-group-item-action ${active === 'bookmarks'?'active':''}`}>
                    <i className="bi bi-bookmark-fill"></i>
                </Link>
                <Link to="#" className={`d-none d-xl-block d-xxl-block list-group-item list-group-item-action ${active === 'bookmarks'?'active':''}`}>
                    <i className="bi bi-bookmark-fill"></i>
                    Bookmarks
                </Link>

                {/*Lists*/}
                <Link to="#" className={`d-xl-none list-group-item list-group-item-action ${active === 'lists'?'active':''}`}>
                    <i className="bi bi-list-ul"></i>
                </Link>
                <Link to="#" className={`d-none d-xl-block d-xxl-block list-group-item list-group-item-action ${active === 'lists'?'active':''}`}>
                    <i className="bi bi-list-ul"></i>
                    Lists
                </Link>

                {/*Profile*/}
                <Link to="#" className={`d-xl-none list-group-item list-group-item-action ${active === 'profile'?'active':''}`}>
                    <i className="bi bi-person-fill"></i>
                </Link>
                <Link to="#" className={`d-none d-xl-block d-xxl-block list-group-item list-group-item-action ${active === 'profile'?'active':''}`}>
                    <i className="bi bi-person-fill"></i>
                    Profile
                </Link>

                {/*More*/}
                <Link to="#" className={`d-xl-none list-group-item list-group-item-action ${active === 'more'?'active':''}`}>
                    <i className="bi bi-info-circle-fill"></i>
                </Link>
                <Link to="#" className={`d-none d-xl-block d-xxl-block list-group-item list-group-item-action ${active === 'more'?'active':''}`}>
                    <i className="bi bi-info-circle-fill"></i>
                    More
                </Link>
            </div>
            <div className="d-grid mt-2">
                <a href="#"
                   className="btn btn-primary btn-block rounded-pill">
                    Tuit
                </a>
            </div>
        </>
    );
};
export default NavigationSidebar;