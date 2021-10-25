import { Field,ErrorMessage } from "formik"
import TextError from "./TextError"
import React from "react"

const CheckBox = ({name,label,options,...rest}) => {

    return(
        <div className="form-control">
            <label>{label}</label>
            <Field name={name}>
                {
                    ({field})=> {
                        return options.map((option)=>{
                            return(
                            <React.Fragment key={option.key}>
                                <input 
                                type="checkbox"  
                                id={option.value} 
                                {...field} 
                                value={option.value} 
                                checked={field.value.includes(option.value)} />
                                <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                            )

                        })
                    }
                

                }
            </Field>

            <ErrorMessage name={name} component={TextError}/>

        </div>
    )
}

export default CheckBox