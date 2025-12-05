import React from "react";
import { TrustedStyle } from "./trusted-style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBuildingColumns,
  faBook,
  faUserGraduate,
  faChalkboardTeacher
} from "@fortawesome/free-solid-svg-icons";

const TrustedComponent = () => {
  return (
    <TrustedStyle>
      <h1>Trusted By</h1>

      <div className="parent">

        <div className="child card1">
          <div className="badge">
            <FontAwesomeIcon icon={faBuildingColumns} />
          </div>
          <span className="numbers">100+</span>
          <br></br>
          <span className="details">Colleges</span>
          <div className="bottom-strip strip1"></div>
        </div>

        <div className="child card2">
          <div className="badge">
            <FontAwesomeIcon icon={faChalkboardTeacher} />
          </div>
          <span className="numbers">150</span>
          <br></br>
          <span className="details">Professional Trainers</span>
          <div className="bottom-strip strip2"></div>
        </div>

        <div className="child card3">
          <div className="badge">
            <FontAwesomeIcon icon={faBook} />
          </div>
          <span className="numbers">1000+</span>
          <br></br>
          <span className="details">Study Materials</span>
          <div className="bottom-strip strip3"></div>
        </div>

        <div className="child card4">
          <div className="badge">
            <FontAwesomeIcon icon={faUserGraduate} />
          </div>
          <span className="numbers">1,00,000+</span>
          <br></br>
          <span className="details">Students</span>
          <div className="bottom-strip strip4"></div>
        </div>

      </div>
    </TrustedStyle>
  );
};

export default TrustedComponent;
