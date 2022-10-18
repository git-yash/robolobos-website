import React from 'react';
import "./HomePage.css";
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

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <div className="parallax">
                    <h1 className="NameH1">CPHS Robotics</h1>
                    <div className="pad50"></div>
                    <h1 className="smallNameH1"> The Robolobos</h1>

                    <div className="pad240"></div>

                    <div className="aboutDiv figure">
                        <h1 className="teamH1">The Teams</h1>
                        <div className="pad60"></div>
                        <h3 className="teamText">
                            We have two teams FRC and FTC and some other text
                        </h3>
                        <div className="centerContainer">
                            <button className="btn btn-lg btn-outline-primary-reverse center">First Technology Competition</button>
                            <div className="buttonDiv"/>
                            <button className="btn btn-lg btn-outline-primary center">First Robotics Competition</button>
                        </div>
                    </div>

                    <div className="pad100"></div>

                    <div className="aboutDiv">
                        <h1 className="aboutH1">
                            About Us
                        </h1>
                        <div className="pad50"></div>
                        <div className="aboutUsRow">
                            <div className="aboutUsColumn">
                                <img style={{ maxWidth: "100%", maxHeight: 350 }} src="/teamAustinCompPostersSmall.jpg" alt="aboutUsPhoto1"/>
                            </div>
                            <div className="aboutUsColumn">
                                <img style={{ maxWidth: "100%", maxHeight: 400 }} src="/teamPitSmall.jpg" alt="aboutUsPhoto2"/>
                            </div>
                            <div className="aboutUsColumn">
                                <img style={{ maxWidth: "100%", maxHeight: 350 }} src="/teamVandycompSmall.jpg" alt="aboutUsPhoto3"/>
                            </div>
                        </div>
                        <h1 className="aboutBodyH1">
                            A very cool team that does stuff and had 2 different teams within that compete differently and stuff. If only business would finish writing this section, so this space is filled with meaningful and inspiring text about us. Well, for now it's just my ramblings. Sadly I have to write a copious about of random text to fill this large space allocated for the task of discribing us on the main page. If you are reading this, don't there is no meaning in it, your just reading filler text. No seriously stop reading this, its just a waste of time. Alright I think this is enough placeholder text.
                        </h1>
                    </div>

                    <div className="pad100"></div>


                    <div className="imageCarousel">
                        <div className="pad50"></div>

                        <Carousel>
                            <div>
                                <img src="/teamVandycomp.JPG" alt={""}/>
                            </div>
                            <div>
                                <img src="/teamPit.JPG"  alt={""}/>
                            </div>
                            <div>
                                <img src="/teamAustinCompPosters.JPG" alt={""}/>
                            </div>
                        </Carousel>
                    </div>

                    <div className="pad50"></div>


                </div>
        </>
    );
}

export default HomePage;
