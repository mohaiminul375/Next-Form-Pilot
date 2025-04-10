import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Users {
    _id: string;
    full_name: string;
    user_name: string;
    city: string;
    zip_code: string;
    createdAt: string;
}
// Get Users data from server
export const useGetUsers = () => {
    const { data, isLoading, isError, error } = useQuery<Users[]>({
        queryFn: async () => {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/form-data`)
            return data;
        },
        queryKey: ['all-users']
    })
    return { data, isLoading, isError, error }
}
// get a summary from server
export const useGetDataSummary = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryFn: async () => {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/form-data/summary-data`)
            return data;
        },
        queryKey: ['summary-data']
    })
    return { data, isLoading, isError, error }
}