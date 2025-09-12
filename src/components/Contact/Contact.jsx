import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
        <a
  href="https://mail.google.com/mail/u/0/#inbox"
>
  sapkotaabiral3@email.com
</a>

        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/abiral-sapkota-6308122bb/">linkedin.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/MDmessi">github.com</a>
        </li>

         <li className={styles.link}>
          <li className={styles.link}>
          <img src={getImageUrl("contact/whatsappicon.png")} alt="whatsapp icon icon" />
          <a href="https://wa.me/9779869003715">9869003715 </a>
        </li>
          
        </li>
      </ul>
    </footer>
  );
};
