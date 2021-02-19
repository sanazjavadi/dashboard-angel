import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Formik } from 'formik';
import { UseGlobalContext } from '../../state/dreamContext/context'

//components
import Input from '../../component/Input'
import Button from '../../component/Button'
import UploadImage from '../../component/UploadImage'
import TextArea from '../../component/TextArea'

function Dream(props) {
    const { id } = useParams
    const { currentDream, getDream, editDream } = UseGlobalContext();

    // useEffect(() => getDream(id))
    return (
        <>
            <h3 className="title text-right"> اصلاح آرزو</h3>
            <Formik
                initialValues={{ name: currentDream.name, desc: currentDream.desc, subject: currentDream.subject, price: currentDream.price }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'لطفا نام را وارد کنید';
                    }
                    else if (!values.desc) {
                        errors.desc = 'لطفا توضیحات را وارد کنید'
                    }
                    else if (!values.subject) {
                        errors.subject = 'لطفا موضوع را وارد کنید'
                    }
                    else if (values.subject.length < 3 && values.subject.length > 15) {
                        errors.subject = 'موضوع باید بین ۳ تا ۱۵ حرف داشته باشد'
                    }
                    else if (!values.price) {
                        errors.price = 'لطفا مبلغ را وارد کنید'
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    editDream(values)
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
                                    handleChange={handleChange} handleBlur={handleBlur} name="name" error={errors.name && touched.name && errors.name} />
                            </div>

                            <div className="mt-2 w-100">
                                <Input placeholder="موضوع" value={values.subject}
                                    name="subject"
                                    handleChange={handleChange} handleBlur={handleBlur} error={errors.subject && touched.subject && errors.subject} />
                            </div>
                            <div className="mt-2 w-100">
                                <TextArea rows="3" placeholder="توضیحات" value={values.desc}
                                    name="desc" handleChange={handleChange} handleBlur={handleBlur} error={errors.desc && touched.desc && errors.desc} />
                            </div>
                            <div className="mt-2 w-100">
                                <Input placeholder="مبلغ مورد نیاز" handleBlur={handleBlur} type="number" value={values.price}
                                    name="price" handleChange={handleChange}
                                    error={errors.price && touched.price && errors.price} />
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
