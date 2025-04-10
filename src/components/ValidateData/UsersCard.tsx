import React from 'react';
import { FaClock, FaEnvelopeOpen, FaUserCheck } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
interface UsersData {
    _id: string;
    full_name: string;
    user_name: string;
    city: string;
    zip_code: string;
    createdAt: string;
}
interface User {
    user: UsersData
};
const UsersCard = ({ user }: User) => {
    const { full_name, user_name, city, zip_code, createdAt } = user;
    return (
        <div className="bg-foreground text-white p-6 rounded-xl shadow-sm shadow-foreground space-y-1 hover:scale-105 transition-transform duration-300 dark:border border-indigo-200 border-double">
            <h3 className="text-xl font-semibold">{full_name}</h3>
            <h6 className="text-lg flex items-center gap-1 font-semibold"><FaUserCheck /> Username: {user_name}</h6>
            <h6 className="text-lg flex items-center gap-1 font-semibold"><FaLocationDot /> City: {city}</h6>
            <h6 className="text-lg flex items-center gap-1 font-semibold"><FaEnvelopeOpen /> Zip Code: {zip_code}</h6>
            <h6 className="text-lg flex items-center gap-1 font-semibold"><FaClock /> Validate At: {new Date(createdAt).toLocaleString()}</h6>
        </div>
    );
};

export default UsersCard;