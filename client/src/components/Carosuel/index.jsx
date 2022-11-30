import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./styles.module.css";

function Carosuel() {
  return (
    <div>
      <Carousel className={styles.carousel}>
        <div>
          <img
            src="https://n11scdn.akamaized.net/a1/1180_440/22/11/27/79/92/84/66/62/41/72/51/90/16768455969833370330.jpg"
            alt="slider1"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            src="https://n11scdn.akamaized.net/a1/1180_440/22/11/11/77/94/71/12/21/56/79/00/74/52941045120851658961.jpg"
            alt="slider1"
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            src="https://n11scdn.akamaized.net/a1/1180_440/22/11/15/66/37/05/97/96/28/06/06/47/25071798523190397556.jpg"
            alt="slider1"
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Carosuel;
