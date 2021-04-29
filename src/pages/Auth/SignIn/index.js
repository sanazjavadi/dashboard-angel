import { Formik } from 'formik';
import { useGlobalContext } from '../../../state/authContext/context';

//components
import Input from "../../../component/Input";
import Button from "../../../component/Button";

//styles
import Styles from "./styles/Signin.module.scss";
import {Container, Row, Col} from 'react-bootstrap'

function Index({ changeHandler }) {
  const { logIn } = useGlobalContext()
  return (
    <section className="mt-5 pt-5 pb-5">
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col lg={5} md={10} sm={11} xs={12}>
            <div className={Styles["form-card"]}>
              <h3 className="text-right"> ورود</h3>
              <Formik
                initialValues={{ email: '', password: '' }}
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
                    logIn(values)
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
                      ورود
              </Button>
                  </form>
                )}
              </Formik>



              <div className={`${Styles["footer-form"]} text-center mt-3`}>
                هنوز عضو نشدی؟
                <span className="font-weight-bolder mr-1" onClick={() => changeHandler('signUpComponent')}>ثبت نام</span>
                <p className={Styles.forgotText} onClick={() => changeHandler('forgotComponent')}> بازیابی کلمه عبور</p>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

Index.propTypes = {};

export default Index;
