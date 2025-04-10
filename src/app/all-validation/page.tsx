'use client'
import Loading from "../loading";
import { useGetUsers } from "./api/route";
import UsersCard from "@/components/ValidateData/UsersCard";

const AllValidationData = () => {
    const { data: users, isLoading, error, isError } = useGetUsers();
    
    if (isError) return (
        <p className="text-center text-red-700">
            Error: {error && (typeof error === "string" ? error : error.message)}
        </p>
    );
    // console.log(data);
    return (
        <section className="mt-10 md:max-w-7xl mx-auto">
            <div className="my-5">
                <h2 className="text-center text-primary font-semibold text-3xl">See a Summary of Validating data by Users</h2>
            
            </div>
            {
                isLoading ? <Loading/> : <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Example Card */}
                    {
                        users?.map((user) => <UsersCard key={user._id} user={user} />)
                    }


                </div>
            }
        </section>

    );
};

export default AllValidationData;