import React from 'react'
import style from "@/app/style/Footer.module.css";
import { FiChevronRight,FiPhone,FiMail,FiMapPin,FiFacebook,FiInstagram,FiTwitter,FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className={style.footer}>
        <section className={style.container}>
            <div className={style.box}>
                <h3>Quick Links</h3>
                <a href="" className='flex items-center'><FiChevronRight/> Home</a>
                <a href="" className='flex items-center'><FiChevronRight/> Shop</a>
                <a href="" className='flex items-center'><FiChevronRight/> About</a>
                <a href="" className='flex items-center'><FiChevronRight/> Contact</a>
            </div>
            
            <div className={style.box}>
                <h3>Contact Info</h3>
                <p className='flex items-center'><FiPhone className='size-9 mr-3'/> +84.432.333.123</p>
                <p className='flex items-center'><FiMail className='size-9'/> flowergarden@gmail.com</p>
                <p className='flex items-center'><FiMapPin className='size-11'/> 
                    Trụ sở chính 123 Ngô Quyền – Sơn Trà – Đà Nẵng
                    Giờ mở hàng: 7:00-22:00 hàng ngày
                </p>
            </div>

            <div className={style.box}>
                <h3>Follow Us</h3>
                <p className='flex items-center'><FiFacebook/> Facebook</p>
                <p className='flex items-center'><FiInstagram/> Instagram</p>
                <p className='flex items-center'><FiTwitter/> Twitter</p>
                <p className='flex items-center'><FiLinkedin/> Linkedin</p>
            </div>
        </section>
    </div>
  )
}

export default Footer