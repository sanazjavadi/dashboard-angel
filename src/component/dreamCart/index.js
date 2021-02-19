import React, { useState } from 'react'

//components
import Progress from '../progress'
import Options from '../Options'

//styles
import styles from './styles/dreamCart.module.scss'

//assets
import OptionIcon from '../../svg/Option'

function DreamCart({ name, dream, image, title, id, theme }) {
     
     
    const [showOption, setShowOption] = useState(false)
    return (

        <div className={`${styles[`dream-${theme}`]} py-2 mb-3`}>
            <div className={styles.option} onMouseOver={() => setShowOption(true)} onMouseLeave={() => setShowOption(false)}>
                <OptionIcon width="20" height="20" />
                {
                    showOption && <Options id={id}/>
                }
            </div>
  
            <Progress percantage="60%" />
            <span>اسکیت</span>
            <span>{name}</span>
            <img src={image} alt="" />

        </div>



    )
}
export default DreamCart;
