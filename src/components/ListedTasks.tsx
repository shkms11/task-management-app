import React from "react";

interface TaskItem {
    id: number;
    title: string;
    isCompleted: boolean;
}

interface ListedTasksProps {
    tasks: TaskItem[];
    toggleTaskCompletion: (id: number) => void;
}

const ListedTasks: React.FC<ListedTasksProps> = ({
    tasks,
    toggleTaskCompletion,
}) => {
    return (
        <div className="w-full max-w-md">
            {tasks.map((task) => (
                <div
                    key={task.id}
                    className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-2"
                >
                    <input
                        type="checkbox"
                        checked={task.isCompleted}
                        onChange={() => toggleTaskCompletion(task.id)}
                        className="mr-2"
                    />
                    <span
                        className={
                            task.isCompleted ? "line-through text-gray-500" : ""
                        }
                    >
                        {task.title}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default ListedTasks;
