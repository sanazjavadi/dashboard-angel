import React from 'react'

//components
import Progress from '../progress'

//styles
import styles from './styles/dreamCart.module.scss'

//assets
import OptionIcon from '../../svg/Option'

 function DreamCart({name, dream, image, title, theme}) {
    

    return (
        <div className={`${styles[`dream-${theme}`]} py-2 mb-3`}>
            <div>
          <OptionIcon width="20" height="20"/>
            </div>
          
       <Progress percantage="60%"/>
        <span>اسکیت</span>
        <span>{name}</span>
        <img src={image} alt="" />
     
        </div>
    )
}
export default  DreamCart;
