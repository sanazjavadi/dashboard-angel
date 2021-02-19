import React from 'react'

//styles
import styles from './styles/textarea.module.scss'

 function TextArea(props) {
    const {placeholder, handleChange, handleBlur, rows, name, value} = props

    return (
       <textarea className={styles['form-control']}
        {...props} 
        value={value}
        rows={rows} 
        name={name} 
        placeholder={placeholder} 
        onChange={(e)=> handleChange(e)}
         onBlur={(e)=> handleBlur(e)}
         
        />
    )
}

export default TextArea;