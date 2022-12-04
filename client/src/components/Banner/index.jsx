import React from "react";
import styles from "./styles.module.css";

function Banner() {
  return (
    <div className={styles.row}>
      <div className={styles.column}>
        <div className={styles.card}>
          <img
            className={styles.img}
            src="https://eticaretv7.demobul.com.tr/storage/general/icon-truck.png"
            alt="img4"
          />
          <div className={styles.text}>
            <p className={styles.textTitle}>FAST DELIVERY</p>
            <p className={styles.textMessage}>
              Your orders will reach you as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.card}>
          <img
            className={styles.img}
            src="https://eticaretv7.demobul.com.tr/storage/general/icon-purchase.png"
            alt="img3"
          />
          <div className={styles.text}>
            <p className={styles.textTitle}>SAFE RETURN</p>
            <p className={styles.textMessage}>Return your products easily.</p>
          </div>
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.card}>
          <img
            className={styles.img}
            src="https://eticaretv7.demobul.com.tr/storage/general/icon-bag.png"
            alt="img1"
          />
          <div className={styles.text}>
            <p className={styles.textTitle}>SECURE SHOPPING</p>
            <p className={styles.textMessage}>
              Enjoy safe shopping on our site.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.card}>
          <img
            className={styles.img}
            src="https://eticaretv7.demobul.com.tr/storage/general/icon-operator.png"
            alt="img2"
          />
          <div className={styles.text}>
            <p className={styles.textTitle}>MOBILE ORDER</p>
            <p className={styles.textMessage}>
              Track your orders via your mobile phone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
