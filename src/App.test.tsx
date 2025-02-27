import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { describe, expect, test } from "vitest";

describe("App Component", () => {
    test("renders App component", () => {
        render(<App />);
        expect(screen.getByText("Task Management App")).toBeInTheDocument();
    });

    test("renders initial tasks correctly", () => {
        render(<App />);

        const task1 = screen.getByText("Task 1");
        const task2 = screen.getByText("Task 2");
        const task3 = screen.getByText("Task 3");
        const task4 = screen.getByText("Task 4");
        const task5 = screen.getByText("Task 5");

        expect(task1).toBeInTheDocument();
        expect(task2).toBeInTheDocument();
        expect(task3).toBeInTheDocument();
        expect(task4).toBeInTheDocument();
        expect(task5).toBeInTheDocument();
    });

    test("adds a new task correctly", () => {
        render(<App />);

        const inputElement = screen.getByPlaceholderText("Enter a task");
        const buttonElement = screen.getByText("Add Task");

        fireEvent.change(inputElement, { target: { value: "New Task" } });
        fireEvent.click(buttonElement);
        const newTask = screen.getByText("New Task");
        expect(newTask).toBeInTheDocument();
    });

    test("toggles task completion correctly", () => {
        render(<App />);
        const task1Checkbox = screen.getAllByRole("checkbox")[0];
        expect(task1Checkbox).not.toBeChecked();

        fireEvent.click(task1Checkbox);
        expect(task1Checkbox).toBeChecked();

        fireEvent.click(task1Checkbox);
        expect(task1Checkbox).not.toBeChecked();
    });
});
