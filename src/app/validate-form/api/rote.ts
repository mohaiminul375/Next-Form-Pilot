'use client'
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
export const useCreateFormData = () => {
    const router = useRouter();
    return useMutation({
        mutationFn: async (cashIn_Verify: object) => {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/form-data`, cashIn_Verify)
            return data
        },
        mutationKey: ['verify-cashIn'],
        onSuccess: (data) => {
            console.table(data);
            router.push('/')
            toast.success('your data saved on Database')
        },
        onError: () => {
            
            toast.error('failed to save on Database try later')
        }

    })
}