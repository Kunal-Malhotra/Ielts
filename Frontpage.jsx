import React from "react";
import "./Frontpage.css";
import { Apple, Blue, Diamond, HalfCircle, image, Orange, User1, User2, User3, Windows } from "./icons/icons";

const FrontPage = (props) => {
  return (
      <div className="Container">
          <div className="Title1">
            <h2 id="brand">IELTS Practice Tests.</h2>
            <p id="para">Get your speaking, writing, listening and reading checked by AI AI with minutes.</p>
            <div className="buttons">
                <button id="button1" variant="contained"  color="primary">START FOR FREE</button>
                <button  id="button2" variant="outlined" color="primary">SHOW RESULT</button>
            </div>
            <div className="information">
                <div className="info1">
                    <p style={{fontWeight: "bolder",fontFamily: "Roboto"}}>You will be ready in no time </p>
                    <img src={Diamond} alt="diamond" style={{margin: "0vh 1vh"}}></img>
                </div>
                <div  className="info2">
                    <p style={{fontWeight: "bolder",fontFamily: "Roboto"}}>Runs on</p>
                    <img src={Apple} alt="Apple" style={{margin: "0vh 1vh"}}></img>
                    <img src={Windows} alt="Window"></img>
                </div>
            </div>
          </div>
          <div className="Title2">
          <div className="User1">
              <img src={User1} alt="user1" className="image1"></img>
              <p id="User1ara" >The Perfect Website</p>
            </div>
            <div className="User2">
              <img src={User2} alt="user2" className="image2"></img>
              <div id="User2ara">Feedback was Awesome</div>
            </div> 
            <div  className="User3">
              <img src={User3} alt="user3" className="image3"></img>
              <div id="User3ara">Unbelievable AI</div>
            </div> 
          <div className="Center">
              <img src={HalfCircle} alt="halfcircle"  className="HalfCircle" />
              <img src={Blue} alt="BlueDots"  className="BlueDots" />
              <img src={image} alt="Rightimage"  className="Rightimage"/>
              <img src={Orange} alt="OrangeDots"  className="OrangeDots"/>
            </div>
          
          </div>

      </div>
  )
}

export default FrontPage;