'use client'
import { addUser, removeUser } from "@/redux/Slices/userSlice";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddUser = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userDispatch = () => {
    dispatch(addUser(name));
    setName("");
  };
  const userData = useSelector((data) => data.usersData.users);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mb-4">
        <input type="text" name="name" value={name} placeholder="Enter name" className="w-full h-12 px-4 border border-gray-300 mb-4 focus:outline-none focus:border-blue-500 rounded-md" onChange={(e) => setName(e.target.value)} />
        <button className="w-full h-12 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none" onClick={userDispatch}>Add User</button>
        <div className="flex items-center justify-evenly">
          <Link href="/deleteuser" className="text-center underline text-blue-500 mt-4 hover:underline">Delete User</Link>
          <Link href="/todo" className="text-center underline text-blue-500 mt-4 hover:underline">Todos</Link>
          <Link href="/users" className="text-center underline text-blue-500 mt-4 hover:underline">Users From API</Link>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">List Users</h2>
        {userData.map((data) => (
          <div key={data.id} className="flex items-center justify-between border-b border-gray-300 py-2">
            <span className="text-lg">{data.name}</span>
            <button
              className="text-red-500 hover:text-red-700 focus:outline-none"
              onClick={() => dispatch(removeUser(data.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddUser;