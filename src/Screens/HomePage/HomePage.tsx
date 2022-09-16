import * as React from "react";
import "./HomePage.css";

const HomePage = () => {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <body>
                <h1>CPHS Robotics!</h1>
                <div className="parallax"></div>
                <div style={{height:1000, backgroundColor:"red"}}></div>
            </body>
        </>
    );
}

export default HomePage;