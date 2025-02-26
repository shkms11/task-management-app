import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListedTasks from "./ListedTasks";
import { describe, expect, test, vi } from "vitest";

describe("ListedTasks Component", () => {
    const tasks = [
        { id: 1, title: "Task 1", isCompleted: false },
        { id: 2, title: "Task 2", isCompleted: true },
    ];

    test("renders without crashing", () => {
        render(<ListedTasks tasks={tasks} toggleTaskCompletion={() => {}} />);
    });

    test("renders tasks correctly", () => {
        render(<ListedTasks tasks={tasks} toggleTaskCompletion={() => {}} />);

        const task1 = screen.getByText("Task 1");
        const task2 = screen.getByText("Task 2");

        expect(task1).toBeInTheDocument();
        expect(task2).toBeInTheDocument();
    });

    test("checkbox toggles task completion", () => {
        const toggleTaskCompletionMock = vi.fn();
        render(
            <ListedTasks
                tasks={tasks}
                toggleTaskCompletion={toggleTaskCompletionMock}
            />
        );

        const checkboxes = screen.getAllByRole("checkbox");

        fireEvent.click(checkboxes[0]);
        fireEvent.click(checkboxes[1]);

        expect(toggleTaskCompletionMock).toHaveBeenCalledTimes(2);
        expect(toggleTaskCompletionMock).toHaveBeenCalledWith(1);
        expect(toggleTaskCompletionMock).toHaveBeenCalledWith(2);
        expect(checkboxes.length).toBe(2); // Ensure there are only 2 checkboxes
    });

    test("task title is styled correctly based on completion status", () => {
        render(<ListedTasks tasks={tasks} toggleTaskCompletion={() => {}} />);

        const task1 = screen.getByText("Task 1");
        const task2 = screen.getByText("Task 2");

        expect(task1).not.toHaveClass("line-through text-gray-500");
        expect(task2).toHaveClass("line-through text-gray-500");
    });
});
