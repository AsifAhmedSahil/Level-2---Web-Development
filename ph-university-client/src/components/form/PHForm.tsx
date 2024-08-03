/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react"
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form"

 type TFormProps = {
    onSubmit: SubmitHandler<FieldValues>,
    children: ReactNode
} & TFormConfig

type TFormConfig = {
    defaultValues ?: Record<string,any>
}

const PHForm = ({onSubmit,children,defaultValues}:TFormProps) => {
    const formConfig :TFormConfig = {}

    if(defaultValues){
        formConfig['defaultValues'] = defaultValues;

    }
    const methods = useForm(formConfig)
  return (
    <FormProvider {...methods}>

    <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}

export default PHForm