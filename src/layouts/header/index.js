import React from 'react'

//styles
import styles from './styles/header.module.scss'

//assets
import { Logo } from './../../svg'

function Header(props) {


    return (
        <header className="w-100 py-3 px-5 d-flex justify-content-between">
            <div className="pl-5">
                <Logo height="40" width="40" />
            </div>
            <div className={`d-flex align-items-center justify-content-center pr-5 ${styles.avatar}`}>
                <span className="mr-2">
                    name
             </span>

                <img src="https://www.flaticon.com/svg/vstatic/svg/2919/2919906.svg?token=exp=1613062009~hmac=c45fa02f3bb58a44ebaeccc59e21c04a" alt="" />



            </div>




        </header>
    )
}

export default Header