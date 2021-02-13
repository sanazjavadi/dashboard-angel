import React, { useState } from 'react'
import {Products}  from '../../constans/data'

//components
import DreamCart from '../../component/dreamCart';

//styles
import styles from './styles/dreams.module.scss'

 function Dreams(props) {
    const [theme, setTheme]= useState('list')

    return (
        <div>
           <h3 className="title text-right mb-5"> آرزوها </h3>
           <div className="mb-4 d-flex justify-content-between">
               <div className={styles.list}>
             <img onClick={()=> setTheme('list')} width="20" height="20" src="https://www.flaticon.com/svg/vstatic/svg/833/833301.svg?token=exp=1613227711~hmac=731259b6b4ea6629f7d7c213619d31b4" alt=""/>
               <img onClick={()=> setTheme('cube')} width="20" height="20" className="ml-3" src="https://www.flaticon.com/svg/vstatic/svg/1250/1250641.svg?token=exp=1613227610~hmac=4c5e61e56c98f6b4963e1ec397a3f1b6" alt=""/>
               </div>
               <input type="text" className="form-control w-50" placeholder="جستجو..." dir="rtl"/>
           </div>
           <div className="d-flex flex-wrap justify-content-between">
           {
                Products.map((product)=> <DreamCart theme={theme} {...product}/>)
            }
           </div>
           
         
        </div>
    )
}


export default Dreams;