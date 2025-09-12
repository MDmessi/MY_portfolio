import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import CVN from '../../data/CVN.pdf';
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abi</h1>
        <p className={styles.description}>
          I'm a full-stack developer. Reach out if you'd like to learn more!
        </p>

        <div className={styles.buttonGroup}>
          <a
            href={CVN}
            download
            className={styles.contactBtn}
          >
            Download CV
          </a>
          <a
            href="#contact"
            className={styles.contactBtn}
          >
            Hire Me
          </a>
        </div>
      </div>

      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
