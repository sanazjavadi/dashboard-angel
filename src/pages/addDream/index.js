import React from 'react'

//components
import Input from '../../component/Input'
import Button from '../../component/Button'
import UploadImage from '../../component/UploadImage'

function AddDreams(props) {


  return (
    <>
      <h3 className="title text-right"> اضافه کردن آرزو جدید</h3>


      <form action="" className="d-flex ">
        <div className="w-50">
          <UploadImage />

        </div>
        <div className="w-50">
          <div className="w-100">
            <Input placeholder="نام" />
          </div>
          <div className="mt-2 w-100">
            <Input placeholder="توضیحات" />
          </div>
          <div className="mt-2 w-100">
            <Input placeholder="موضوع" />
          </div>
          <div className="mt-2 w-100">
            <Input placeholder="مبلغ مورد نیاز" type="number" />
          </div>
          <div className="mt-2">
            <Button size="block" theme="lightbtn">
              اضافه کردن آرزو
           </Button>
          </div>
        </div>

      </form>
    </>
  )
}


export default AddDreams;