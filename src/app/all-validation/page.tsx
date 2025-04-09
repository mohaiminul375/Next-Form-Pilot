'use client'
import { FaClock, FaEnvelopeOpen, FaUserCheck } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useGetUsers } from "./api/route";
import UsersCard from "@/components/ValidateData/UsersCard";

const AllValidationData = () => {
    const { data: users, isLoading, error, isError } = useGetUsers();
    if (isLoading) {
        return
    }
    // console.log(data);
    return (
        <section className="mt-10 md:max-w-7xl mx-auto">
            <div className="my-5">
                <h2 className="text-center text-black font-semibold text-2xl">See a Summary of Validating data by Users</h2>
            </div>
            {
                isLoading ? 'loading' : <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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