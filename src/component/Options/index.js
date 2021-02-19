import React from 'react'
import { UseGlobalContext } from "../../state/context";

//styles
import styles from './styles/options.module.scss'

export default function Options({id}) {
const {editDream, removeDream } = UseGlobalContext()

    return (
        <div className={`${styles.options} text-right`}>
             <div className="pr-3 py-2 w-100" onClick={()=> editDream()}>پاک کردن</div>
           
             <div className="pr-3 py-2 w-100" onClick={()=> removeDream(id)}>اصلاح کردن</div>
        </div>
    )
}
