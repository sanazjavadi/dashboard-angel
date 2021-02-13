import React, { useState } from 'react'
import {Products}  from '../../constans/data'

//components
import DreamCart from '../../component/dreamCart';
import Input from '../../component/Input'

//styles
import styles from './styles/dreams.module.scss'

//assets
import GirdIcon from '../../svg/GridList'
import ListIcon from '../../svg/ListIcon'

 function Dreams(props) {
    const [theme, setTheme]= useState('list')

    return (
        <div>
           <h3 className="title text-right"> آرزوها </h3>
           <div className="mb-4 d-flex align-items-center justify-content-between">
               <div className={styles.list}>
                   <ListIcon onClick={()=> setTheme('list')} width="20" height="20"/>
                   <GirdIcon onClick={()=> setTheme('cube')} width="20" height="20" className="ml-3" />
            
               </div>
               <div className="w-50">
               <Input placeholder="جستجو"/>
               </div>
          
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