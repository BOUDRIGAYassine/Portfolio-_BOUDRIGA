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
        Passionné d'intelligence artificielle et d'analyse de données, je transforme des données complexes en insights exploitables. Mon expérience s'étend du développement d'applications mobiles à la création de tableaux de bord dynamiques, toujours en mettant l'accent sur la précision et l'innovation.

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
