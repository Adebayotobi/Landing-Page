import React from "react";
import Chat2 from "../images/Chatapp.png"
import Chat3 from "../images/Chat3.png"



const Card = () => {

    return (
        <div className="landing-card">
            <div className="landing-card2">
                <img src={Chat2} alt="" />
                <p>Find yourself in a new new place or city? Dont be alone, reach out to new people. Find your peers and find your connection.</p>
            </div>
            <div className="landing-card2">
                <img src={Chat3} alt="" />
                <p>Find yourself in a new new place or city? Dont be alone, reach out to new people. Find your peers and find your connection.</p>
            </div>
        </div>
    );
}

export default Card;
