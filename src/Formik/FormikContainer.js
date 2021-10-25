import { Formik,Form } from "formik";
import * as Yup from 'yup'
import Feild from "./FormikControl";

function FormikContainer (){

    const dropdownOptions = [
        {key:'select an option',value:''},
        {key:'Option 1',value:'option1'},
        {key:'Option 2',value:'option2'},
        {key:'Option 3',value:'option3'}
    ]

    
    const radioValueOptions = [
        
        {key:'Male',value:'male'},
        {key:'Female',value:'female'},
        
    ]

    const checkboxOptions = [
        
        {key:'checkBox1',value:'box1'},
        {key:'checkBox2',value:'box2'},
        {key:'checkBox3',value:'box3'},
        
    ]

    const initialValues = {
        email:'',
        description:'',
        selectOptions:'',
        radioOptions:'',
        checkbox:[],


    }
    const validationSchema = Yup.object({
        email:Yup.string().required("Required"),
        description:Yup.string().required("Required"),
        selectOptions:Yup.string().required("Required"),
        radioOptions:Yup.string().required("Required"),
        checkbox:Yup.array().required("Required"),
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
                    <Form>
                        <Feild
                        control="input"
                        autoComplete='off'
                        label="email"
                        name="email"/>

                          <Feild
                        control="input"
                        autoComplete='off'
                        label="Description"
                        name="description"/>

                        <Feild
                        control="select"
                        autoComplete='off'
                        label="Select a Topic"
                        name="selectOptions"
                        options={dropdownOptions}
                        />

                        
                       <Feild
                        control="radio"
                        autoComplete='off'
                        label="choose from below"
                        name="radioOptions"
                        options={radioValueOptions}
                        />

                        <Feild
                        control="checkbox"
                        autoComplete='off'
                        label="select the box"
                        name="checkbox"
                        options={checkboxOptions}
                        />


                        <button type='submit'>Submit</button>
                    </Form>
                )
            }

        </Formik>
    )
}

export default FormikContainer
