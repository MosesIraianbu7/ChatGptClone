import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("Chat UI Full Rendering Tests", () => {

    it("should render empty state message initially", () => {
        render(<App />);
        expect(screen.getByText("What can I help with?")).toBeInTheDocument();
    });

    it("should render New Chat button", () => {
        render(<App />);
        expect(screen.getByRole("button", { name: /new chat/i })).toBeInTheDocument();
    });

    it("should create a new chat when New Chat button is clicked", () => {
        render(<App />);

        const newChatButton = screen.getByRole("button", { name: /new chat/i });
        fireEvent.click(newChatButton);

        expect(screen.getByText("New Chat 1")).toBeInTheDocument();
    });

    it("should create chat and display message when user sends text", () => {
        render(<App />);

        const input = screen.getByPlaceholderText("Ask anything...");
        const sendButton = screen.getByTestId("SendIcon").closest("button");

        fireEvent.change(input, { target: { value: "Hello" } });
        fireEvent.click(sendButton);

        const helloMessages = screen.getAllByText("Hello");
        expect(helloMessages.length).toBeGreaterThan(0);

        expect(
            screen.getByText("This is a hardcoded reply.")
        ).toBeInTheDocument();
    });

    it("should respond with greeting when user types hi", () => {
        render(<App />);

        const input = screen.getByPlaceholderText("Ask anything...");
        const sendButton = screen.getByTestId("SendIcon").closest("button");

        fireEvent.change(input, { target: { value: "hi" } });
        fireEvent.click(sendButton);

        expect(screen.getByText("Hello 👋 How can I help you?")).toBeInTheDocument();
    });

});