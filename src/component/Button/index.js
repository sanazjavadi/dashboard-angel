import React from 'react'

//styles
import styles from './styles/button.module.scss'

export function Button(props) {

  const { children, size, theme, handleClick, type, disabled } = props;
  return (
    <button
    disabled={disabled}
      type={type}
      onClick={handleClick}
      className={`${styles[`btn-${size}`]} ${styles[`${theme}`]}`}
    >
      {children}
    </button>
  )
}
Button.defaultProps = {
  theme: "darkbtn",
  size:'lg',
  type:'button'
};

export default Button;
