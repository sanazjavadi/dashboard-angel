import React from "react";

//styles
import Styles from "./Styles/Input.module.scss";

function Index(props) {
    const {
        type,
        value,
        placeholder,
        size,
        align,
        handleChange,
        handleIcon,
        error,
        icon,
      }  = props
  return (
    <div className={Styles["wrapper-input"]}>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        {...props}
        className={
          size
            ? `${Styles[`form-control-${size}`]}`
            : `${Styles["form-control"]}`
        }
        dir={align ? "ltr" : "rtl"}
        onChange={(e) => handleChange(e)}
      />
      {icon && (
        <span onClick={() => handleIcon()}>
          {/* <i className="['fas', `fa-${icon}`, 'leftIcon']"></i> */}
        </span>
      )}
      {error && <span></span>}
    </div>
  );
}

export default Index;
