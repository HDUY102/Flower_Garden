import React from 'react'
import style from "@/app/style/About.module.css";

const About = () => {
  return (
    <section className={style.about}>
      <h1 className={style.heading}><span>about</span> us </h1>
      <div className="row">
        <div className={style.video_cotain}>
          <video src='/video/video_flower.mp4' loop autoPlay muted></video>
          <h3>best flower sellers</h3>
        </div>
        <div>
          <h3>Why choose us?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, 
            iusto quisquam. Dolores odio sapiente consectetur dolorem vero 
            recusandae deleniti quis sequi corporis praesentium libero iure 
            debitis dolorum, neque minima nostrum.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Error quia ut alias laboriosam minus, veritatis expedita 
            commodi. Quo, distinctio molestias. Ducimus sit hic officia 
            eos tempora perspiciatis totam esse quos!
          </p>
          <a href='#' className={style.btn}>learn more</a>
        </div>
      </div>
    </section>
  )
}

export default About