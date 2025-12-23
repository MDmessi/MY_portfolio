import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import CVN from "../../data/CVN.pdf";

export const Hero = () => {
  const roles = [
    "Python Developer",
    "PHP Developer",
    "Full-Stack Developer",
    "UI/UX Designer",
    "MERN Stack Developer",
    "Problem Solver",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I’m <span className={styles.name}>Abiral Sapkota-(Developer)</span>
        </h1>

        {/* KEY forces animation to replay */}
        <h2 key={index} className={styles.role}>
          {roles[index]}
        </h2>

        <p className={styles.description}>
          Results-driven full-stack developer from Kathmandu, Nepal, bringing 2+ years of
experience in developing robust, scalable, and secure web applications.
Experienced in PHP, Python (Django), JavaScript, and React, with a focus on
performance, maintainability, and exceptional user experience.

        </p>

        <div className={styles.buttonGroup}>
          <a href={CVN} download className={styles.contactBtn}>
            Download CV
          </a>
          <a href="#contact" className={styles.contactBtn}>
            Hire Me
          </a>
        </div>
      </div>

      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
