import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import { Input, TextField, Checkbox } from '@material-ui/core'
import { Input as InputField } from 'antd'

export default function FormWithUILib() {
    const { control, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller as={Input} name="MUIInput" control={control} defaultValue="" />
            <Controller as={TextField} name="MUITextField" control={control} defaultValue="" />
            <Controller as={InputField} name="AntdInput" control={control} defaultValue="" />

            {/* pass a JSX element to the Controller. */}
            {/* Any prop passed to the element will be overriden. In this case, "SomeName" will be changed to "MyCheckbox". */}
            <Controller
                as={<Checkbox name="someName" />}
                name="MyCheckbox"
                control={control}
                defaultValue={false}
            />

            <Controller 
                as={Select} 
                name="reactSelect" 
                control={control} 
                onChange={([selected]) => { 
                    return { value: selected } 
                }} 
            />
            <input type='submit' />
        </form>
    )
}