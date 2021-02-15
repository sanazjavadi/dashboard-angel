import React from 'react'

//styles
import styles from './styles/uploadImage.module.scss'

//assets
import UploadSvg from '../../svg/Upload'

function UploadImage(props) {
    

    return (
        <div className={styles.uploadArea}>
        <UploadSvg heigth="40" width="40" />
        <div className="mt-3">drag and drops your files or  browse</div>
    </div>
    )
}

export default UploadImage