import React from 'react'

//component
import Input from '../../component/Input'
import Button from '../../component/Button'
import Upload from '../../component/UploadImage'

//styles
import styles from './styles/setting.module.scss'

function Setting(props) {

  return (
    <div>
      <h3 className="title text-right"> تنظیمات</h3>
      <form className="mx-auto d-flex flex-wrap">
        <div className={`${styles.rightForm} d-flex flex-column align-items-center`}>

        
          <Upload />
          <span className="mt-3  w-75 text-right">آپلود عکس کارت ملی *</span>
          <div className="w-75 mt-lg-auto mb-3 mt-4">
            <Button size="block" theme="lightbtn">
              ارسال
            </Button>
          </div>
        </div>
        <div className={styles.rightForm}>
          <div className={`${styles['input-area']}`}>
            <Input placeholder="نام سازمان*" />
          </div>
          <div className={`${styles['input-area']} mt-2`}>
            <Input placeholder="نام مدیر *" />
          </div>


          <div className={`${styles['input-area']} mt-2`}>
            <Input placeholder="شماره تلفن سازمان*" />
          </div>
          <div className={`${styles['input-area']} mt-2`}>
            <Input placeholder="شماره تلفن مدیر*" />
          </div>

          <div className={`mt-2 mx-auto ${styles['text-area']}`}>
            <textarea
              placeholder="  آدرس ...*"
              rows="3"
              className={styles['form-control']}
            ></textarea>

          </div>
          <div className={`mt-2 mx-auto ${styles['text-area']}`}>
            <textarea
              placeholder=" توضیح در مورد سازمان"
              rows="2"
              className={styles['form-control']}
            ></textarea>

          </div>
        </div>


      </form>
    </div>
  )
}


export default Setting;
