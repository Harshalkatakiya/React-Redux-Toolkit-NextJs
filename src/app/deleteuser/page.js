"use client"
import { removeUser } from "@/redux/Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const DeleteUser = () => {
    const userData = useSelector((data) => data.usersData.users);
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Delete Users</h2>
                {userData.map((data) => (
                    <div key={data.id} className="flex items-center justify-between border-b border-gray-300 py-2">
                        <span className="text-lg">{data.name}</span>
                        <button className="text-red-500 hover:text-red-700 focus:outline-none" onClick={() => dispatch(removeUser(data.id))} >Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DeleteUser;