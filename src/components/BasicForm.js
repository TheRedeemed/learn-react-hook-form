import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'

export default function BasicForm() {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = data => console.log('submitting', data)

    return(
        <Fragment>
            <h2>Basic Form</h2>

            {/* handleSubmit validates input before invoking the onSubmit */}
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* register input into the hook by invoking the register function */}
                <input name="example" defaultValue="test" ref={register} />

                {/* using standard html required property to add validation to this field */}
                <input name="requiredExample" ref={register({required:true})} />
                {errors.requiredExample && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </Fragment>
    )
}