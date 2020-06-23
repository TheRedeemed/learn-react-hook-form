import React from 'react'
import { useForm } from 'react-hook-form'

export default function SignUpForm() {
    const{ register, handleSubmit, errors } = useForm()
    const onSubmit = data => console.log(data)
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    
    const validateUserName = async (value) => {
        await sleep(1000)
        return value === 'abdoulks' ? true : false
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign up</h1>

            <label>First Name: </label>
            <input name="firstName" ref={register({required: true, minLength:2})} />
            {errors.firstName && errors.firstName.type === "required" && <span>First name is required</span>}
            {errors.firstName && errors.firstName.type === "minLength" && <span>First name minimun length is 2</span>}

            <label>Last Name: </label>
            <input name="lastName" ref={register({required: true})} />
            {errors.lastName && <span>Last name is required</span>}

            <label>Gender: </label>
            <select name="gender" ref={register({required : true})}>
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            {errors.gender && <span>Gender is required</span>}

            <label>Username: </label>
            <input name="username" ref={register({required : true, validate: validateUserName})} />
            {errors.username && errors.username.type === "required" && <span>Username is required</span>}
            {errors.username && errors.username.type === "validate" && <span>Required username is Abdoulks</span>}

            <label>Email: </label>
            <input name="email" ref={register({required : true})} />
            {errors.email && <span>Email is required</span>}

            <label>About you: </label>
            <textarea name="aboutYou" ref={register({required : true})} />
            {errors.aboutYou && <span>About you is required</span>}

            <input type="submit" />
        </form>
    )
}