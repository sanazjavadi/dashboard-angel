import React from 'react'

//components
import Progress from '../progress'

//styles
import styles from './styles/dreamCart.module.scss'

 function DreamCart({name, dream, image, title, theme}) {
    

    return (
        <div className={`${styles[`dream-${theme}`]} py-2 mb-3`}>
       <Progress percantage="60%"/>
        <span>اسکیت</span>
        <span>{name}</span>
        <img src={image} alt="" />
        </div>
    )
}
export default  DreamCart;
