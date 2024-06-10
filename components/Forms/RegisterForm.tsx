"use client"

import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email:z.string().email({
        message: "Use a valid Email Address",
    }),
    contact:z.number().positive().max(10,{message:"Invalid Mobile Number"}).min(10,{message:"Invalid Mobile Number"}),
})

export const RegisterForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} method='post' className="space-y-8">
                    {/* <div className='p-4 text-white flex flex-col items-center justify-center gap-3'>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="name" className='text-md'>Organization&apos;s Name</Label>
                            <Input type="name" id="name" placeholder="" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email" className='text-md'>Organization&apos;s Email</Label>
                            <Input type="email" id="email" placeholder="abc@gmail.com" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="Phone" className='text-md'>Official Contact No.</Label>
                            <Input type="number" id="phone" placeholder="9xx6xx8xx0" />
                        </div>
                        <Button type='button' className='bg-gold-500 font-semibold'>Next</Button>
                    </div> */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Your Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your Full Name" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This name will be used as your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="abc@domain.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="contact"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contact Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="9**8**7**0" {...field} type='number' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='bg-gold-500 font-semibold'>Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export const CorporateRegisterForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

