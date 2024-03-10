import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Min Hset</h1>
            <p className={styles.description}>
                I'm a full-stack developer with a focus on front end!
            </p>
            <a href="mailto:tyler.hlaing@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img 
            src={getImageUrl("hero/heroImage.png")} 
            alt="Hero Image of Me" 
            className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}
