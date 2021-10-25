import { Field,ErrorMessage } from "formik"
import TextError from "./TextError"
import React from "react"


const RadioButton = ({name,label,options,...rest}) => {
    return(
        <div className="form-control">
            <label>{label}</label>
            <div>
            <Field name={name} className="radio">
                {
                    ({field})=> {
                        return options.map((option)=>{
                            return(
                            <React.Fragment key={option.key}>
                                <input type="radio"  id={option.value} {...field} value={option.value} checked={field.value===option.value} />
                                <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                            )

                        })
                    }
                

                }
            </Field>
            </div>

            <ErrorMessage name={name} component={TextError}/>

        </div>
    )
}


export default RadioButton