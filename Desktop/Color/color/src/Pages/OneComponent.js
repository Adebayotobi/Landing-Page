import React from "react";
import { Link } from "react-router-dom";
import Apple from "../images/Appleimage.png"
import Google from "../images/google.png"


const Download =()=>{

  return (
    <div className="landing-side">
                <h1> Download the app today!</h1>
                <div className="landing-app">
                    <Link>
                        <div className="landing-apple">
                            <img src={Apple} alt="" />
                            <h2>Download on the  <br /><span>App store </span> </h2>
                        </div>
                    </Link>

                    <Link>
                        <div className="landing-google">
                            <img src={Google} alt="" />
                            <h2>Download on the  <br /><span>Play store </span> </h2>
                        </div>
                    </Link>
                </div>
            </div>
  );
}

export default Download;
