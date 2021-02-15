import React from 'react'

//styles
import styles from './styles/button.module.scss'

export function Button(props) {
    
    const { children, size, theme, handleClick } = props;
    return (
        <button
        type="button"
        onClick={handleClick}
        className={`${styles[`btn-${size}`]} ${styles[`${theme}`]}`}
      >
        {children}
      </button>
    )
}

export default Button;
