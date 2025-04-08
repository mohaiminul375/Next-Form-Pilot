'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// Handle steps or page

const ValidateForm = () => {
    const [currentPg, setCurrentPg] = useState<number>(1);
    return (
        <section>
            {/* Starting content */}
            <div className="flex justify-center items-center min-h-screen">
                <div className=" md:min-w-3xl mx-auto bg-foreground shadow-2xl p-6  rounded-md text-white py-10">

                    {/* Form */}
                    <div className="mt-5 ">
                        <form>
                            {/* Step 1 */}
                            {
                                currentPg === 1 && <div>
                                    <h2 className="text-3xl font-bold text-center mb-5">Step 1: Personal Information</h2>
                                    {/* Name */}
                                    <div className="space-y-3">
                                        <div className="space-y-2">
                                            <Label className="font-semibold" htmlFor="name"> Your Full Name <span className="text-red-700 font-bold">*</span></Label>
                                            <Input type="string" placeholder="Enter your Full Name" />
                                        </div>
                                        {/* Email */}
                                        <div className="space-y-2">
                                            <Label className="font-semibold" htmlFor="email">Your Email <span className="text-red-700 font-bold">*</span></Label>
                                            <Input type="email" placeholder="Enter your email" />
                                        </div>
                                        {/* Phone Number */}
                                        <div className="space-y-2">
                                            <Label className="font-semibold" htmlFor="tel">Your Full Name <span className="text-red-700 font-bold">*</span></Label>
                                            <Input type="tel" placeholder="Enter your phone number" />
                                        </div>
                                    </div>
                                    {/* step button */}
                                    <div className="mt-5 flex justify-end">
                                        <Button
                                            onClick={() => setCurrentPg(2)}
                                            variant='outline' className="px-6 text-lg flex items-center justify-center">Next<FaChevronRight /></Button>
                                    </div>
                                </div>
                            }
                            {/* Step 2 */}
                            {
                                currentPg === 2 && <div>
                                    <h2 className="text-3xl font-bold text-center mb-5">Step 2: Address Details</h2>
                                    {/* Name */}
                                    <div className="space-y-3">
                                        <div className="space-y-2">
                                            <Label className="font-semibold" htmlFor="name"> Street Address <span className="text-red-700 font-bold">*</span></Label>
                                            <Input type="string" placeholder="Enter your Full Name" />
                                        </div>
                                        {/* Email */}
                                        <div className="space-y-2">
                                            <Label className="font-semibold" htmlFor="email">City <span className="text-red-700 font-bold">*</span></Label>
                                            <Input type="email" placeholder="Enter your email" />
                                        </div>
                                        {/* Phone Number */}
                                        <div className="space-y-2">
                                            <Label className="font-semibold" htmlFor="tel">Zip Code<span className="text-red-700 font-bold">*</span></Label>
                                            <Input type="tel" placeholder="Enter your phone number" />
                                        </div>
                                    </div>
                                    {/* step button */}
                                    <div className="mt-5 flex justify-between">
                                        <Button
                                            onClick={() => setCurrentPg(1)}
                                            variant='outline' className="px-6 text-lg flex items-center justify-center"><FaChevronLeft />Previous</Button>
                                        <Button
                                            onClick={() => setCurrentPg(3)}
                                            variant='outline' className="px-6 text-lg flex items-center justify-center">Next<FaChevronRight /></Button>
                                    </div>
                                </div>
                            }
                            {/* Step 3 */}
                            {
                                currentPg === 3 && <div>
                                    <h2 className="text-3xl font-bold text-center mb-5">Step 3: Account Setup</h2>
                                    {/* Name */}
                                    <div className="space-y-3">
                                        <div className="space-y-2">
                                            <Label className="font-semibold" htmlFor="name"> User Name <span className="text-red-700 font-bold">*</span></Label>
                                            <Input type="string" placeholder="Enter your Full Name" />
                                        </div>
                                        {/* Email */}
                                        <div className="space-y-2">
                                            <Label className="font-semibold" htmlFor="email">Password <span className="text-red-700 font-bold">*</span></Label>
                                            <Input type="email" placeholder="Enter your email" />
                                        </div>
                                        {/* Phone Number */}
                                        <div className="space-y-2">
                                            <Label className="font-semibold" htmlFor="tel">confirm Password<span className="text-red-700 font-bold">*</span></Label>
                                            <Input type="tel" placeholder="Enter your phone number" />
                                        </div>
                                    </div>
                                    {/* step button */}
                                    <div className="mt-5 flex justify-between">
                                        <Button
                                            onClick={() => setCurrentPg(2)}
                                            variant='outline' className="px-6 text-lg flex items-center justify-center"><FaChevronLeft />Previous</Button>
                                        <Button
                                            onClick={() => setCurrentPg(4)}
                                            variant='outline' className="px-6 text-lg flex items-center justify-center">Next<FaChevronRight /></Button>
                                    </div>
                                </div>
                            }
                        </form>
                    </div>
                </div>

            </div>
            {/* Start button */}

        </section>
    );
};

export default ValidateForm;