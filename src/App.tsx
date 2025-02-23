import React, { useState } from "react";
import Task from "./components/Task";
import ListedTasks from "./components/ListedTasks";
import "./App.css";

interface TaskItem {
    id: number;
    title: string;
    isCompleted: boolean;
}

const App: React.FC = () => {
    const [tasks, setTasks] = useState<TaskItem[]>([
        { id: 1, title: "Task 1", isCompleted: false },
        { id: 2, title: "Task 2", isCompleted: false },
        { id: 3, title: "Task 3", isCompleted: true },
        { id: 4, title: "Task 4", isCompleted: false },
        { id: 5, title: "Task 5", isCompleted: true },
    ]);

    const addTask = (task: TaskItem) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const toggleTaskCompletion = (id: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? { ...task, isCompleted: !task.isCompleted }
                    : task
            )
        );
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-4xl font-bold text-blue-500 mb-4">
                Task Management App
            </h1>
            <Task addTask={addTask} />
            <ListedTasks
                tasks={tasks}
                toggleTaskCompletion={toggleTaskCompletion}
            />
        </div>
    );
};

export default App;
