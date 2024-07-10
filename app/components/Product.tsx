import React from 'react'
import style from "@/app/style/Product.module.css";
import { FaHeart,FaShare  } from "react-icons/fa";

const Product = () => {
  return (
    <section id='product' className={style.product}>
        <h2>Product</h2>
        <div className={style.container}>
            <div className={style.box}>
                <p className={style.discount}>-20%</p>
                <div className={style.image}>
                    <img src="/flower1.png" alt="" />
                    <div className={style.button}>
                        <a href=""><FaHeart className={style.icon}/></a>
                        <a className={style.addCart}>Add To Cart</a>
                        <a href=""><FaShare className={style.icon}/></a>
                    </div>
                </div>
                <div className={style.content}>
                    <h3>Flower Pot</h3>
                    <div className={style.price}>$12.99 <span>$15.99</span></div>
                </div>
            </div>
            <div className={style.box}>
                <p className={style.discount}>-20%</p>
                <div className={style.image}>
                    <img src="/flower1.png" alt="" />
                    <div className={style.button}>
                        <a href=""><FaHeart className={style.icon}/></a>
                        <a className={style.addCart}>Add To Cart</a>
                        <a href=""><FaShare className={style.icon}/></a>
                    </div>
                </div>
                <div className={style.content}>
                    <h3>Flower Pot</h3>
                    <div className={style.price}>$12.99 <span>$15.99</span></div>
                </div>
            </div>
            <div className={style.box}>
                <p className={style.discount}>-20%</p>
                <div className={style.image}>
                    <img src="/flower1.png" alt="" />
                    <div className={style.button}>
                        <a href=""><FaHeart className={style.icon}/></a>
                        <a className={style.addCart}>Add To Cart</a>
                        <a href=""><FaShare className={style.icon}/></a>
                    </div>
                </div>
                <div className={style.content}>
                    <h3>Flower Pot</h3>
                    <div className={style.price}>$12.99 <span>$15.99</span></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Product