import * as React from "react";
import "./HomePage.css";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";

const HomePage = () => {

    /*

    TODO:

     Navbar:
        - underneath support us booster, donate, volunteer, sponsor
        - Store tab on main navbar

    Qgiv api?

    put business sponsors on home page

    image carousel on home page

    fundraiser in replace of sponsor cards

    home page is about us

    when fundrasing starts we change homepage / have pop ups

     */

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <body>
                <div className="parallax">
                    <h1 className="NameH1">CPHS <br/> Robolobos</h1>

                    <div style={{padding: 240}}></div>

                    {/*<h1 className="sponsorH1" style={{fontSize: 53}}>Sponsors</h1>
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
                    </div>*/}

                    {/*<div style={{padding: 100}}></div>*/}

                    <div className="aboutDiv">
                        <h1 className="sponsorH1" style={{fontSize: 53, paddingBottom:0, height: 10}}>The Teams</h1>
                        <div style={{padding: 50}}></div>
                        <h3 style={{textAlign: 'center', color: 'white', fontSize: 32, width: 1200, paddingLeft: 300, paddingTop: 0}}>
                            We have two teams FRC and FTC and some other text
                        </h3>
                        <div className="centerContainer">
                            <button className="btn btn-lg btn-outline-primary center">First Robotics Competition</button>
                            <div style={{paddingLeft: 20, paddingRight: 20, display: "inline-block"}}/>
                            <button className="btn btn-lg btn-outline-primary center">First Technology Competition</button>
                        </div>
                    </div>

                    <div style={{padding: 100}}></div>

                    <div className="imageCarousel">
                        <h1>Image Carousel</h1>
                    </div>

                    <div style={{padding: 100}}></div>
                </div>
            </body>
        </>
    );
}

export default HomePage;
