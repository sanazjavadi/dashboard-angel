import React from 'react'
import { useHistory } from "react-router-dom";
import { UseGlobalContext } from "../../state/context";

//styles
import styles from './styles/options.module.scss'

export default function Options({id}) {
const { removeDream } = UseGlobalContext();
const history = useHistory()
    return (
        <div className={`${styles.options} text-right`}>
             <div className="pr-3 py-2 w-100"  onClick={()=> removeDream(id)} >پاک کردن</div>
           
             <div className="pr-3 py-2 w-100" onClick={()=> history.push(`/dream/${id}`)}
            >اصلاح کردن</div>
        </div>
    )
}
