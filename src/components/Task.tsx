import React, { useState } from "react";

interface TaskItem {
    id: number;
    title: string;
    isCompleted: boolean;
}

interface TaskProps {
    addTask: (task: TaskItem) => void;
}

const Task: React.FC<TaskProps> = ({ addTask }) => {
    const [taskTitle, setTaskTitle] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTask: TaskItem = {
            id: Date.now(),
            title: taskTitle,
            isCompleted: false,
        };
        addTask(newTask);
        setTaskTitle("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={taskTitle}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default Task;
