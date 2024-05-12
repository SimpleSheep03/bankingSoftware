"use client"

import React, { useState } from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { FieldPath } from "react-hook-form"
import { Control } from 'react-hook-form'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up')

interface CustomInput{
    control : Control<z.infer<typeof formSchema>>,
    name : FieldPath<z.infer<typeof formSchema>>,
    label : string,
    placeholder : string
}

const CustomInput = ({ control , name , placeholder , label } : CustomInput) => {
  return (
    <FormField
                    control={control}
                    name={name}
                    render={({ field }) => (
                        <div className="form-item">
                            <FormLabel className="form-label">
                                {label}
                            </FormLabel>
                            <div className="flex w-full flex-col">
                                <FormControl>
                                    <Input placeholder={placeholder} className="input-class" {...field}
                                    type={name === 'password' ? 'password' : 'text'}> 
                                    </Input>
                                </FormControl>
                                <FormMessage className="form-message mt-2"/>
                            </div>
                        </div>
                    )}
                    />
  )
}

export default CustomInput