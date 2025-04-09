'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
// Zod validation
interface UserInfo {
    full_name: string;
    email: string;
    phone_number: string;
    street_address: string;
    city: string;
    zip_code: string;
    user_name: string;
    password: string;
    confirm_password: string;
}
const userSchema = z.object({
    full_name: z.string().min(1, 'full_name is required'),
    email: z.string().email('enter a valid email'),
    phone_number: z.string().min(10, 'number must be at least 10 digits').regex(/^\d+$/, 'phone number must contain only numbers'),
    street_address: z.string().min(1, 'street address is required'),
    city: z.string().min(1, 'city is required'),
    zip_code: z.string().min(5, 'zip code must be 5 digits or more').regex(/^\d+$/, 'Zip code must contain only numbers'),
    user_name: z.string().min(4, 'username must be 4 characters or more'),
    password: z.string().min(6, 'password must be 6 character or more'),
    confirm_password: z.string(),

}).refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

type Input = z.infer<typeof userSchema>
const steps = [
    {
        id: 'Step 1',
        name: 'Personal Information',
        fields: ['full_name', 'email', 'phone_number']
    },
    {
        id: 'Step 2',
        name: 'Address Details',
        fields: ['street_address', 'city', 'zip_code']
    },
    {
        id: 'Step 3',
        name: 'Account Setup',
        fields: ['user_name', 'password', 'confirm_password']
    },
    {
        id: 'Step 3',
        name: 'Summary',

    },

]
// 
const ValidateForm = () => {
    // Handle steps or page
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [previousStep, setPreviousStep] = useState(0);
    const [userData, setUserData] = useState<UserInfo>();

    //react hook form
    const {
        register,
        handleSubmit,
        watch,
        trigger,
        formState: { errors, },
    } = useForm<Input>({
        resolver: zodResolver(userSchema),
    })
    const onSubmit: SubmitHandler<Input> = (data) => {
        console.table(data)

        setUserData(data)
        setCurrentStep(3)
    }

    console.log(errors)
    // Previous Step
    const prev = () => {
        if (currentStep > 0) {
            setPreviousStep(currentStep)
            setCurrentStep(step => step - 1)
        }
    }
    // Next Step
    type FieldName = keyof Input
    const next = async () => {
        const fields = steps[currentStep].fields
        const output = await trigger(fields as FieldName[], { shouldFocus: true })
        console.log(fields, output)
        if (!output) return

        if (currentStep < steps.length - 1) {
            if (currentStep === steps.length - 2) {
                await handleSubmit(onSubmit)()
            }
            setPreviousStep(currentStep)
            setCurrentStep(step => step + 1)
        }
    }

    return (
        <section>
            {/* Starting content */}
            <div className="flex justify-center items-center min-h-screen">
                <div className=" md:min-w-3xl mx-auto bg-foreground shadow-2xl p-6  rounded-md text-white py-10">

                    {/* Form */}
                    <div className="mt-5 ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Step 1 */}
                            {
                                currentStep === 0 && <div>
                                    <h2 className="text-3xl font-bold text-center mb-5">Step 1: Personal Information</h2>
                                    {/* Name */}
                                    <div className="space-y-3">
                                        <div className="space-y-2">
                                            <Label className="font-semibold" htmlFor="name"> Your Full Name <span className="text-red-700 font-bold">*</span></Label>
                                            <Input
                                                type="string"
                                                placeholder="Enter your Full Name"
                                                {...register('full_name')}
                                            />
                                            <span className="text-red-700">{errors?.full_name && errors.full_name.message}</span>
                                        </div>
                                        {/* Email */}
                                        <div className="space-y-2">
                                            <Label className="font-semibold" htmlFor="email">Your Email <span className="text-red-700 font-bold">*</span></Label>
                                            <Input
                                                {...register('email')}
                                                type="email" placeholder="Enter your email" />
                                            <span className="text-red-700">{errors?.email && errors.email.message}</span>
                                        </div>
                                        {/* Phone Number */}
                                        <div className="space-y-2">
                                            <Label className="font-semibold" htmlFor="tel">Your Phone Number <span className="text-red-700 font-bold">*</span></Label>
                                            <Input
                                                {...register('phone_number')}
                                                type="tel" placeholder="Enter your phone number" />
                                            <span className="text-red-700">{errors?.phone_number && errors.phone_number.message}</span>
                                        </div>
                                    </div>
                                </div>
                            }
                            {/* Step 2 */}
                            {
                                currentStep === 1 && <div>
                                    <h2 className="text-3xl font-bold text-center mb-5">Step 2: Address Details</h2>
                                    {/* street address */}
                                    <div className="space-y-3">
                                        <div className="space-y-2">
                                            <Label className="font-semibold" htmlFor="street"> Street Address <span className="text-red-700 font-bold">*</span></Label>
                                            <Input
                                                {...register('street_address')}
                                                type="string" placeholder="Enter your street address" />
                                            <span className="text-red-700">{errors?.street_address &&
                                                errors.street_address.message}
                                            </span>
                                        </div>
                                        {/* City */}
                                        <div className="space-y-2">
                                            <Label className="font-semibold" htmlFor="city">City <span className="text-red-700 font-bold">*</span></Label>
                                            <Input
                                                {...register('city')}
                                                type="string" placeholder="Enter your city" />
                                            <span className="text-red-700">{errors?.city &&
                                                errors.city.message}
                                            </span>
                                        </div>
                                        {/* Zip */}
                                        <div className="space-y-2">
                                            <Label className="font-semibold" htmlFor="zip">Zip Code<span className="text-red-700 font-bold">*</span></Label>
                                            <Input
                                                {...register('zip_code')}
                                                type="number" placeholder="Enter your Zip Code" />
                                            <span className="text-red-700">{errors?.zip_code &&
                                                errors.zip_code.message}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            }
                            {/* Step 3 */}
                            {
                                currentStep === 2 && <div>
                                    <h2 className="text-3xl font-bold text-center mb-5">Step 3: Account Setup</h2>
                                    {/* Name */}
                                    <div className="space-y-3">
                                        <div className="space-y-2">
                                            <Label className="font-semibold" htmlFor="user_name"> User Name <span className="text-red-700 font-bold">*</span></Label>
                                            <Input
                                                {...register('user_name')}
                                                type="string" placeholder="Enter your user name" />
                                            <span className="text-red-700">{errors?.user_name &&
                                                errors.user_name.message}
                                            </span>
                                        </div>
                                        {/* Email */}
                                        <div className="space-y-2">
                                            <Label className="font-semibold" htmlFor="password">Password <span className="text-red-700 font-bold">*</span></Label>
                                            <Input
                                                {...register('password')}
                                                type="password" placeholder="Enter your email" />
                                            <span className="text-red-700">{errors?.password &&
                                                errors.password.message}
                                            </span>
                                        </div>
                                        {/* Phone Number */}
                                        <div className="space-y-2">
                                            <Label className="font-semibold" htmlFor="confirm_password">confirm Password<span className="text-red-700 font-bold">*</span></Label>
                                            <Input
                                                {...register('confirm_password')}
                                                type="password" placeholder="Enter your phone number" />
                                            <span className="text-red-700">{errors?.confirm_password &&
                                                errors.confirm_password.message}
                                            </span>
                                        </div>
                                        {/* Summary */}
                                        <Button
                                            // onClick={() => setCurrentStep(3)}
                                            size='lg' variant='outline'>Preview</Button>
                                    </div>
                                </div>
                            }
                        </form>
                        {/* step button */}
                        {
                            currentStep !== 3 && <div className={`mt-5 flex justify-between ${currentStep === 0 && "justify-end"}`}>
                                {
                                    currentStep !== 0 && < Button
                                        onClick={prev}
                                        disabled={currentStep === 0}
                                        variant='outline' className="px-6 text-lg flex items-center justify-center"><FaChevronLeft />Previous</Button>
                                }
                                {currentStep !== 2 && <Button
                                    onClick={next}
                                    disabled={currentStep === steps.length - 1}
                                    variant='outline' className="px-6 text-lg flex items-center justify-center">Next<FaChevronRight /></Button>}
                            </div>
                        }

                    </div>
                    {/* summary */}

                    <div>
                        {(currentStep === 3 && userData) && (
                            <div className="max-w-3xl mx-auto p-6 space-y-6">
                                {/* Heading */}
                                <div className="">
                                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Summary</h2>
                                </div>

                                {/* Personal Information */}
                                <div className="border border-gray-200 p-4 rounded-lg bg-gray-50 space-y-2 shadow-lg">
                                    <h3 className="text-xl font-semibold text-gray-700 mb-2">01: Personal Information</h3>
                                    <h5 className="text-gray-600">Full Name: <span className="font-medium text-black">{userData?.full_name}</span></h5>
                                    <h5 className="text-gray-600">Email: <span className="font-medium text-black">{userData?.email}</span></h5>
                                    <h5 className="text-gray-600">Phone Number: <span className="font-medium text-black">{userData?.phone_number}</span></h5>
                                </div>

                                {/* Address Details */}
                                <div className="border border-gray-200 p-4 rounded-lg bg-gray-50 space-y-2 shadow-lg">
                                    <h3 className="text-xl font-semibold text-gray-700 mb-2">02: Address Details</h3>
                                    <h5 className="text-gray-600">Street Address: <span className="font-medium text-black">{userData?.street_address || "not Found"}</span></h5>
                                    <h5 className="text-gray-600">City: <span className="font-medium text-black">{userData?.city || "not Found"}</span></h5>
                                    <h5 className="text-gray-600">Zip Code: <span className="font-medium text-black">{userData?.zip_code || "not Found"}</span></h5>
                                </div>

                                {/* Account Setup */}
                                <div className="border border-gray-200 p-4 rounded-lg bg-gray-50 space-y-2 shadow-lg">
                                    <h3 className="text-xl font-semibold text-gray-700 mb-2">03: Account Setup</h3>
                                    <h5 className="text-gray-600">Username: <span className="font-medium text-black">{userData?.user_name || "not Found"}</span></h5>
                                    <h5 className="text-gray-600">Password: <span className="font-medium text-black">{userData?.password || "not Found"}</span></h5>
                                </div>

                                {/* Submit Button */}
                                <div className="text-center pt-4">
                                    <Button variant="outline" className="w-full">
                                        Submit
                                    </Button>
                                    <Button onClick={prev} variant="outline" className="w-full mt-3">
                                        Prev
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>




                </div>
            </div>
        </section>
    );
};

export default ValidateForm;