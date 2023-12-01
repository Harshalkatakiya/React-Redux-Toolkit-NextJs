'use client'
import { addTodos } from "@/redux/Slices/todoSlice";
import { addUser, removeUser } from "@/redux/Slices/userSlice";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const taskDispatch = () => {
    dispatch(addTodos(task));
    setTask("");
  };
  const userData = useSelector((data) => data.todo.todos);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mb-4">
        <input type="text" name="name" value={task} placeholder="Enter Task" className="w-full h-12 px-4 border border-gray-300 mb-4 focus:outline-none focus:border-blue-500 rounded-md" onChange={(e) => setTask(e.target.value)} />
        <button className="w-full h-12 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none" onClick={taskDispatch}>Add Task</button>
        <div className="flex items-center justify-evenly">
          <Link href="" className="text-center text-blue-500 mt-4 hover:underline">Delete Task</Link>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">List Tasks</h2>
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

export default Todo;