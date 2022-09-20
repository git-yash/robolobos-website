import * as React from "react";
import "./HomePage.css";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import RoboFooter from "../../Components/RoboFooter/RoboFooter";

const HomePage = () => {

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <body>
                <div className="parallax"> <h1> The CPHS Robotics Team</h1>

                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                    <h1 className="sponsorH1" style={{fontSize: 53}}>Sponsors</h1>
                    <div className="sponsorDiv">
                        <br/><br/><br/>
                        <div className="sponsorCardContainer">
                            <ProfileCard
                                name="Amy Lovelace"
                                image="lovelace.jpg"
                                description="Sponsor of FTC roboticsSponsor of FTC roboticsSponsor of FTC roboticsSponsor of FTC robotics"/>
                            <ProfileCard
                                name="Micheal Kalb"
                                image="kalb.jpg"
                                description="Sponsor of FTC roboticsSponsor of FTC roboticsSponsor of FTC roboticsSponsor of FTC robotics"/>
                        </div>
                    </div>

                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                    <div className="aboutDiv">
                        <h1 style={{textAlign: 'center', color: 'white', paddingTop: 20, fontSize: 52}}>About</h1>
                    </div>

                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                </div>
            </body>
            <RoboFooter/>
        </>
    );
}

export default HomePage;
