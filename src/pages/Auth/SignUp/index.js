import { Formik } from 'formik';
import { AuthContext } from '../../../state/authContext/context'

//components
import Input from "../../../component/Input";
import Button from "../../../component/Button";

//styles
import Styles from "./styles/SignUp.module.scss";
import { useContext } from 'react';



function Index({ changeHandler }) {
  const { signUp } = useContext(AuthContext)
  return (
    <section className="mt-5 pt-5">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8 col-sm-10 col-12">
            <div className={Styles["form-card"]}>
              <h3 className="text-right">عضویت</h3>
              <Formik
                initialValues={{ name: '', mobleNumber: '', email: '', password: '' }}
                validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'آدرس ایمیل را وارد کنید';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'آدرس ایمیل نامعتبر میباشد';
                  }
                  else if (!values.password) {
                    errors.password = 'پسورد را وارد کنید'
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    signUp(values)
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
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <Input placeholder="نام و نام خانوادگی"
                        name="name"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.name} />
                    </div>

                    <div className="mb-3">
                      <Input placeholder="ایمیل" type="email" name="email" handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.email} error={errors.email && touched.email && errors.email} />

                    </div>
                    <div className="mb-3">
                      <Input placeholder="کلمه عبور" type="password" name="password" handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.password} error={errors.password && touched.password && errors.password} />

                    </div>

                    <Button className="mb-3" size="block" type="submit" disabled={isSubmitting}>
                      ایجاد حساب کاربری
              </Button>
                  </form>
                )}
              </Formik>

              <div className={`${Styles["footer-form"]} text-center mt-2`}>
                قبلا عضو شدی؟
                <span className="font-weight-bolder mr-1" onClick={() => changeHandler('signInComponent')}>ورود</span>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </section>
  );
}

Index.propTypes = {};

export default Index;
