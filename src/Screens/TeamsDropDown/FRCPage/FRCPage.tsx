import * as React from "react";
import "./FRCPage.css";
import ProfileCard from "../../../Components/ProfileCard/ProfileCard";

const FRCPage = () => {

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <body>
                    <div className="parallax"> <h1 className="FRCh1">FRC</h1>

                        <div style={{padding: 240}}></div>

                        <h1 className="sponsorH1" style={{fontSize: 53}}>Officers</h1>
                        <div className="sponsorDiv">
                            <br/><br/><br/>
                            <div className="sponsorCardContainer">
                                <ProfileCard
                                    name="Silly guy 1"
                                    image="../logo512.png"
                                    description="Officer of FTC robotics \n Officer of FTC robotics \n Officer of FTC robotics \n Officer of FTC robotics"/>
                                <ProfileCard
                                    name="Silly guy 2"
                                    image="../logo512.png"
                                    description="Officer of FTC robotics \n Officer of FTC robotics \n Officer of FTC robotics \n Officer of FTC robotics"/>
                                <ProfileCard
                                    name="Silly guy 3"
                                    image="../logo512.png"
                                    description="Officer of FTC robotics \n Officer of FTC robotics \n Officer of FTC robotics \n Officer of FTC robotics"/>
                                <ProfileCard
                                    name="Silly guy 4"
                                    image="../logo512.png"
                                    description="Officer of FTC robotics \n Officer of FTC robotics \n Officer of FTC robotics \n Officer of FTC robotics"/>
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
        </>
    );
}

export default FRCPage;
