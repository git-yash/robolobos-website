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

                    <div style={{padding: 240}}></div>

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

                    <div style={{padding: 100}}></div>

                    <div className="aboutDiv">
                        <h1 className="sponsorH1" style={{fontSize: 53}}>About</h1>
                        <div style={{padding: 100}}></div>
                        <h3 style={{textAlign: 'center', color: 'white', fontSize: 32}}>
                            Some very cool text about our brand and stuff
                            Some very cool text about our brand and stuff
                            Some very cool text about our brand and stuff
                            Some very cool text about our brand and stuff
                            Some very cool text about our brand and stuff
                            Some very cool text about our brand and stuff
                            Some very cool text about our brand and stuff
                            Some very cool text about our brand and stuff
                            Some very cool text about our brand and stuff
                            Some very cool text about our brand and stuff
                            Some very cool text about our brand and stuff
                            Some very cool text about our brand and stuff
                            Some very cool text about our brand and stuff
                            Some very cool text about our brand and stuff
                        </h3>
                    </div>

                    <div style={{padding: 100}}></div>

                </div>
            </body>
            <RoboFooter/>
        </>
    );
}

export default HomePage;
