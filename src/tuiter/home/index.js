import React from "react";
import TuitList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <ul>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitList/>
        </ul>
    );
};
export default HomeComponent;