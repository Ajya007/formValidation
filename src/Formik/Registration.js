import { Formik,Form } from "formik";
import * as Yup from 'yup'
import Feild from "./FormikControl";


function Registration (){

   
    const contactValueOptions = [
        {key:'Email',value:'email'},
        {key:'Telephone',value:'Telephone'},
        
    ]



    const initialValues = {
        Remail:'',
        password:'',
        confirmPassword:'',
        contact:'',


    }
    const validationSchema = Yup.object({
        Remail:Yup.string().required("Required").email("Invalid Email Format"),
        password:Yup.string().required("Required"),
        confirmPassword:Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords do not match')
        .required('Confirm password is required'),
        contact:Yup.string().required("Required"),
    
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
                    <Form className="registration">
                        <Feild
                        control="input"
                        autoComplete='off'
                        label="Email"
                        name="Remail"/>

                          <Feild
                        control="input"
                        autoComplete='off'
                        label="Password"
                        type="password"
                        name="password"/>


                        <Feild
                        control="input"
                        autoComplete='off'
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"/>

                        <Feild
                        control="radio"
                        autoComplete='off'
                        label="Mode of contact"
                        name="contact"
                        options={contactValueOptions}
                        />


                        <button className="btn" type='submit' >Submit</button>
                    </Form>
                )
            }

        </Formik>
    )
}

export default Registration
