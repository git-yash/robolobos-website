import * as React from "react";
import "./HomePage.css";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";

const HomePage = () => {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <body>
                <div className="parallax"></div>
                <div style={{height:1000, backgroundColor:"black"}}>
                    <h1 style={{textAlign: 'center', color: 'white', paddingTop: 20}}>Sponsors</h1>
                    <div className="sponsorCardContainer">
                        <ProfileCard name="Amy Lovelace" description="Sponsor of FTC roboticsSponsor of FTC roboticsSponsor of FTC roboticsSponsor of FTC robotics"/>
                        <ProfileCard name="Micheal Kalb" description="Sponsor of FTC roboticsSponsor of FTC roboticsSponsor of FTC roboticsSponsor of FTC robotics"/>
                    </div>
                </div>
            </body>
        </>
    );
}

export default HomePage;
