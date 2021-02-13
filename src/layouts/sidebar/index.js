import React from 'react'

//styles
import styles from './styles/sidebar.module.scss'


 function Sidebar(props) {
    

    return (
      
              <ul className={styles.sidebar}>
                            <li className="py-2 pr-3 pl-5">داشبورد</li>
                            <li className="py-2 pr-3 pl-5"> حمایت ها</li>
                            <li className="py-2 pr-3 pl-5"> اضافه کردن آرزو</li>
                            <li className="py-2 pr-3 pl-5">تنظیمات</li>
                        </ul>
  
    )
}

export default Sidebar;