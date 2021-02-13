import React from 'react'
import { Link } from 'react-router-dom'
//styles
import styles from './styles/sidebar.module.scss'


function Sidebar(props) {


    return (

        <ul className={styles.sidebar}>
            <li className="py-2 pr-3 pl-5">
                <Link to="/">
                    داشبورد
                                </Link>

            </li>
            <li className="py-2 pr-3 pl-5">
                <Link to="/dreams">
                    حمایت ها

                            </Link>


            </li>
            <li className="py-2 pr-3 pl-5">
                <Link to="/add-new-dream">
                    اضافه کردن آرزو

                            </Link>


            </li>
            <li className="py-2 pr-3 pl-5">
                <Link to="/setting">
                    تنظیمات
                                </Link>

            </li>
        </ul>

    )
}

export default Sidebar;