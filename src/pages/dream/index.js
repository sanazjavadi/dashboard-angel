import React from 'react'
import { useParams } from "react-router-dom";
import { Formik } from 'formik';

//components
import Input from '../../component/Input'
import Button from '../../component/Button'
import UploadImage from '../../component/UploadImage'


function Dream(props) {
    const { id } = useParams

    return (
        <>
            <h3 className="title text-right"> اصلاح آرزو</h3>
            <Formik
                initialValues={{ name: '', desc: '', subject: '', price: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'لطفا نام را وارد کنید';
                    }
                    else if(!values.desc){
                        errors.desc = 'لطفا توضیحات را وارد کنید'
                    }
                    else if(!values.subject){
                        errors.desc = 'لطفا موضوع را وارد کنید'
                    }
                    else if(!values.price){
                        errors.desc = 'لطفا مبلغ را وارد کنید'
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} className="d-flex ">
                        <div className="w-50">
                            <UploadImage />

                        </div>
                        <div className="w-50">
                            <div className="w-100">
                                <Input placeholder="نام" vlaue={values.name}
                                    handleChange={handleChange} name="name" error={errors.name && errors.name} />
                            </div>
                            <div className="mt-2 w-100">
                                <Input placeholder="توضیحات" value={values.desc}
                                    name="desc" handleChange={handleChange} error={errors.desc && errors.desc} />
                            </div>
                            <div className="mt-2 w-100">
                                <Input placeholder="موضوع" value={values.subject}
                                    name="subject"
                                    handleChange={handleChange} error={errors.subject && errors.subject} />
                            </div>
                            <div className="mt-2 w-100">
                                <Input placeholder="مبلغ مورد نیاز" type="number" value={values.price} 
                                name="price" handleChange={handleChange} 
                                error={errors.subject && errors.subject} />
                            </div>
                            <div className="mt-2">
                                <Button size="block" theme="lightbtn" type="submit" disabled={isSubmitting}>
                                    اصلاح
                          </Button>
                            </div>
                        </div>

                    </form>
                )}
            </Formik>


        </>
    )
}

export default Dream;
