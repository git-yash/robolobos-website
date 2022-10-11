import React from 'react';
import "./HomePage.css";
//import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


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

    align the FTC and FRC buttons and maybe make them more interesting

     */

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <body>
                <div className="parallax">
                    <h1 className="NameH1">CPHS Robotics</h1>
                    <div style={{padding: 50}}></div>
                    <h1 className="smallNameH1"> The Robolobos</h1>

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

                    <div className="aboutDiv figure">
                        <h1 className="teamH1" style={{fontSize: 60, fontWeight:"bold", paddingBottom:0, paddingTop:50, height: 10}}>The Teams</h1>
                        <div style={{padding: 60}}></div>
                        <h3 className="teamText">
                            We have two teams FRC and FTC and some other text
                        </h3>
                        <div className="centerContainer">
                            <button className="btn btn-lg btn-outline-primary-reverse center">First Technology Competition</button>
                            <div style={{paddingLeft: 20, paddingRight: 20, display: "inline-block"}}/>
                            <button className="btn btn-lg btn-outline-primary center">First Robotics Competition</button>
                        </div>
                    </div>

                    <div style={{padding: 100}}></div>

                    <div className="aboutDiv">
                        <h1 style={{fontSize: 60, fontWeight: "bold", paddingTop:30, height: 20}}>
                            About Us
                        </h1>
                        <div style={{padding: 100}}></div>
                        <img
                            src="/stockWorking.jpg"
                            width="1650"
                            height="800"
                            className="d-inline-block align-top img"
                            alt="Robolobos logo"
                        />
                        <h1 style={{fontSize:25}}>
                            About Us About UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout Us
                        </h1>
                    </div>

                    <div style={{padding: 100}}></div>


                    <div className="imageCarousel">
                        <div style={{padding: 100}}></div>

                        <Carousel>
                            <div>
                                <img src="/stockWorking.jpg" alt={""}/>
                                <p className="legend">image 1</p>
                            </div>
                            <div>
                                <img src="/stockWorking.jpg"  alt={""}/>
                                <p className="legend">image 2</p>
                            </div>
                            <div>
                                <img src="/stockWorking.jpg" alt={""}/>
                                <p className="legend">image 3</p>
                            </div>
                        </Carousel>

                        <div style={{padding: 10}}></div>
                    </div>

                    <div style={{padding: 100}}></div>
                </div>
            </body>
        </>
    );
}

export default HomePage;
