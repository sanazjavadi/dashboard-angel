import React from 'react'

//styles
import styles from './styles/dreamCart.module.scss'

 function DreamCart(props) {
    

    return (
        <div className={`${styles.dream} d-flex align-items-center justify-content-around py-2 mb-1`}>
        <progress id="file" max="100" value="70" dir="rtl"> 70% </progress>
        <span>اسکیت</span>
        <span>title</span>
        <span>النا</span>
        <img src="https://www.flaticon.com/svg/vstatic/svg/2919/2919906.svg?token=exp=1613062009~hmac=c45fa02f3bb58a44ebaeccc59e21c04a" alt="" />
        </div>
    )
}
export default  DreamCart;
