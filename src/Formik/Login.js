import { Formik,Form } from "formik";
import * as Yup from 'yup'
import Feild from "./FormikControl";


function Login (){

   



    const initialValues = {
        email:'',
        password:''


    }
    const validationSchema = Yup.object({
        email:Yup.string().required("Required").email("Invalid Email Format"),
        password:Yup.string().required("Required"),
    
    })


    const onSubmit= (values,{ resetForm }) => {
        console.log("form",values)
        resetForm() 
}
    return(
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
            {
                formik => (
                    <Form className="login">
                        <Feild
                        control="input"
                        autoComplete='off'
                        label="Email"
                        name="email"/>

                          <Feild
                        control="input"
                        autoComplete='off'
                        label="Password"
                        type="password"
                        name="password"/>

                        <button type='submit' className="btn" disabled={!formik.isValid}>Submit</button>
                    </Form>
                )
            }

        </Formik>
    )
}

export default Login
