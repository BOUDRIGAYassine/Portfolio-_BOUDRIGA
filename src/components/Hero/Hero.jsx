import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>BOUDRIGA
        Yassine</h1>
        <p className={styles.description}>
        Passionate about artificial intelligence and data analysis, I transform complex data into actionable insights. My experience spans mobile app development and the creation of dynamic dashboards, always with a focus on precision and innovation.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/yassinee.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
