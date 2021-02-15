import React from 'react'

//styles
import styles from './styles/progress.module.scss'

 function Progress({percantage}) {

    return (
        <div className={`d-flex flex-column align-items-center ${styles['progress-wrapper']}`}>
   
        <div className={styles.progress}>
            
        <div className={styles['progress-done']} data-done="60" style={{'width': percantage}}>
       
        </div>
      </div>
      </div>
    )
}

export default Progress;
