import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">

        {/* TOP CENTER HEADING */}
      <h1 className={styles.sectionTitle}>About Me</h1>

      <div className={styles.grid}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Full-Stack Developer & CSIT Student in Kathmandu, Nepal
          </h2>

          <p className={styles.paragraph}>
            I’m <strong>Abiral Sapkota</strong>, a passionate full-stack developer
            and BSc CSIT student based in Kathmandu, Nepal. With over 2 years of
            experience in web development, I specialize in building dynamic,
            responsive, and database-driven web applications using modern
            technologies.
          </p>

          <p className={styles.paragraph}>
            My academic journey started with a strong foundation in computer
            science, which evolved into a passion for full-stack development. I
            focus on creating clean, user-friendly applications that solve
            real-world problems.
          </p>

          {/* STATS */}
          <div className={styles.stats}>
            <div className={styles.statBox}>
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.statBox}>
              <h3>3.29</h3>
              <p>Academic GPA</p>
            </div>
            <div className={styles.statBox}>
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
          </div>
          
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <h2 className={styles.heading}>Education & Academic Background</h2>

          <div className={styles.timeline}>
            <div className={styles.card}>
              <span className={styles.date}>2023 – Present</span>
              <h3>Bachelor in Computer Science & IT (BSc CSIT)</h3>
              <p>Tribhuvan University</p>
              <small>
                Focus on software engineering, web development, database
                management, and computer networks.
              </small>
            </div>

            <div className={styles.card}>
              <span className={styles.date}>2020 – 2022</span>
              <h3>+2 Science (High School)</h3>
              <p>NIST College</p>
              <small>GPA: 3.29</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
