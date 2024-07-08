import React from 'react'
import { GrCreditCard,GrCurrency,GrGift,GrDeliver  } from "react-icons/gr";
import style from "@/app/style/Icons.module.css";

const Icons = () => {
  return (
    <div className={style.container}>
        <div className={style.cardicon}>
            <GrDeliver className={style.icon}/>
            <div className={style.content}>
                <h3>Free Delivery</h3>
                <h4>On All Orders</h4>
            </div>
        </div>
        <div className={style.cardicon}>
            <GrCurrency className={style.icon}/>
            <div className={style.content}>
                <h3>10 Days Returns</h3>
                <h4>Moneyback Guarantee</h4>
            </div>
        </div>
        <div className={style.cardicon}>
            <GrGift className={style.icon}/>
            <div className={style.content}>
                <h3>Offer & Gifts</h3>
                <h4>On All Orders</h4>
            </div>
        </div>
        <div className={style.cardicon}>
            <GrCreditCard className={style.icon}/>
            <div className={style.content}>
                <h3>Secure Payments</h3>
                <h4>Protected By Paypal</h4>
            </div>
        </div>
    </div>
  )
}

export default Icons