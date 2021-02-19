import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Links } from '../../constans/data'


//styles
import styles from './styles/sidebar.module.scss'



function Sidebar(props) {

const [active, setActive]= useState('/')
    return (

        <ul className={styles.sidebar}>

            {
                Links.map((link) => 
                <li key={link.link} onClick={()=> setActive(link.link)} className={`py-2 pr-3 pl-5 d-flex align-items-center mb-2 justify-content-end ${ active === link.link && styles['active-link']}`}>

                    <Link key={link.link} to={`${link.link}`}>
                        {link.title}
                    </Link>

                    <link.icon height="20" width="20" className="ml-2" />

                </li>)
            }


        </ul>

    )
}

export default Sidebar;