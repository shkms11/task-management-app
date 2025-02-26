import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Task from "./Task";
import { describe, expect, test, vi } from "vitest";

describe("Task Component", () => {
    test("renders input and button", () => {
        render(<Task addTask={() => {}} />);

        const inputElement = screen.getByPlaceholderText("Enter a task");
        const buttonElement = screen.getByText("Add Task");

        expect(inputElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });

    test("calls addTask with corredt task data", () => {
        const addTaskMock = vi.fn();
        render(<Task addTask={addTaskMock} />);

        const inputElement = screen.getByPlaceholderText("Enter a task");
        const buttonElement = screen.getByText("Add Task");

        fireEvent.change(inputElement, { target: { value: "New Task" } });
        fireEvent.click(buttonElement);

        expect(addTaskMock).toHaveBeenCalledTimes(1);
        expect(addTaskMock).toHaveBeenCalledWith({
            id: expect.any(Number),
            title: "New Task",
            isCompleted: false,
        });
    });

    test("clears input after adding task", () => {
        render(<Task addTask={() => {}} />);
        const inputElement = screen.getByPlaceholderText("Enter a task");
        const buttonElement = screen.getByText("Add Task");

        fireEvent.change(inputElement, { target: { value: "New Task" } });
        fireEvent.click(buttonElement);

        expect(inputElement).toHaveValue("");
    });
});
