import React from 'react'


//styles
import styles from './styles/dashboard.module.scss'

function Dashboard() {

    return (
        <>
             <h3 className="title text-right"> داشبورد </h3>
            <div className={`d-flex justify-content-between mb-5 ${styles['dreams-status']}`}>
                            <div>

                                <span>۲۱</span>
                                 آرزو</div>
                            <div>

                                <span>۱۰ </span>
                                آرزوی برآورده شده</div>
                            <div>

                                <span>۵ </span>
                                آرزوی برآورده نشده</div>
                        </div>

            <div className={styles.chart}>
            </div>
            <div className="text-right">
                <p className="mb-2 mt-4">آرزو های اخیر</p>
                <div className={styles.lastDreams}>
                    <div className="d-flex align-items-center justify-content-around py-2 mb-1">
                        <progress id="file" max="100" value="70" dir="rtl"> 70% </progress>
                        <span>اسکیت</span>
                        <span>title</span>
                        <span>النا</span>
                        <img src="https://www.flaticon.com/svg/vstatic/svg/2919/2919906.svg?token=exp=1613062009~hmac=c45fa02f3bb58a44ebaeccc59e21c04a" alt="" />
                    </div>
                    <div className="d-flex align-items-center justify-content-around py-2 mb-1">
                        <progress id="file" max="100" value="70" dir="rtl"> 70% </progress>
                        <span>اسکیت</span>
                        <span>title</span>
                        <span>النا</span>
                        <img src="https://www.flaticon.com/svg/vstatic/svg/2919/2919906.svg?token=exp=1613062009~hmac=c45fa02f3bb58a44ebaeccc59e21c04a" alt="" />
                    </div>
                    <div className="d-flex align-items-center justify-content-around py-2 mb-1">
                        <progress id="file" max="100" value="70" dir="rtl"> 70% </progress>
                        <span>اسکیت</span>
                        <span>title</span>
                        <span>النا</span>
                        <img src="https://www.flaticon.com/svg/vstatic/svg/2919/2919906.svg?token=exp=1613062009~hmac=c45fa02f3bb58a44ebaeccc59e21c04a" alt="" />
                    </div>

                </div>

            </div>
        </>
    )


}

export default Dashboard;