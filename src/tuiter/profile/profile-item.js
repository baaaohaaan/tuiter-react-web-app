import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileItem = () => {
    const profile = useSelector(state => state.profile);
    return(
        <>
            {/*profile pictures*/}
            <div className="row">
                <div className="col-2">
                    <img height={48} src="/images/arrow-left.png" alt="arrow"/>
                </div>
                <div className="col-10">
                    <div className="fw-bold" style={{fontSize: 20}}>{profile.firstName} {profile.lastName}</div>
                    <div><p style={{color:'gray', fontSize: 13}}>6,114 Tuits</p></div>
                </div>
            </div>
            <div className="position-relative">
                <div className="position-absolute">
                    <img src={`/images/${profile.bannerPicture}`} height={300} width="640" alt="profile-banner"/>
                </div>
                <img  className="position-absolute headshot-relative-pos rounded-circle " height={150} width={150} src={`/images/${profile.headshot}`} alt="headshot"/>
                <Link to="/tuiter/edit-profile" className="position-absolute btn btn-outline-dark rounded-pill button-relative-pos fw-bold">Edit profile</Link>
            </div>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            {/*more information*/}
            <div className="ms-4 fw-bold" style={{fontSize: 20}}>{profile.firstName} {profile.lastName}</div>
            <div className="ms-4" style={{color:'gray', fontSize: 16}}>{profile.handle}</div>
            <br/>
            <div className="ms-4 me-3">{profile.bio}</div>
            <div className="row mt-3 ms-4 me-5" style={{color:'gray'}}>
                <div className="col-4">
                    <i className="bi bi-pin-map" /> {profile.location}
                </div>
                <div className="col-4">
                    <i className="bi bi-balloon" /> {profile.dateOfBirth}
                </div>
                <div className="col-4">
                    <i className="bi bi-calendar-event"/> {profile.dateJoined}
                </div>
            </div>
            <div className="row mt-2 ms-3">
                <div className="col-3">
                    <p className="fw-bold">{profile.followingCount}<span className="fw-light" style={{color:'gray'}}> Following</span></p>
                </div>
                <div className="col-3">
                    <p className="fw-bold">{profile.followersCount}<span className="fw-light" style={{color:'gray'}}> Followers</span></p>
                </div>
            </div>
        </>
    );
};

export default ProfileItem;