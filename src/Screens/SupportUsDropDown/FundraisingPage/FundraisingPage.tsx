import * as React from "react";
import "../../HomePage/HomePage.css";
import "./FundraisingPage.css";

const FundraisingPage = () => {
    let amount = "1,000";
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <div className="parallax">
                <h1 className="FundraisingTitle">Fundraising</h1>
                <div className="pad50"></div>
                <h1 className="FundraisingSubTitle">Donate now in order to support the robotics team!</h1>
                <div className="pad100"></div>
                <h1 className="FundraisingSubTitle">Amount Raised</h1>
                <h1 className="FundraisingAmount">${amount}</h1>
                <div className="pad60"></div>
                <div className="FundraisingCenter">
                    <button className="btn btn-lg btn-outline-primary-reverse center">
                        Donate
                    </button>
                </div>
                <div className="pad60"></div>

                <div className="FundraisingAboutDiv figure">
                    <h1 className="teamH1">Leaderboard</h1>
                    <div className="pad60"></div>
                    <div className="FundraisingCenter2">
                        <input type="text"></input>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FundraisingPage;