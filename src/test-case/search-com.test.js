import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("testing onChange ketika typing", async () => {
  render(<App />);
  const input = await screen.getByPlaceholderText("batman");
  userEvent.type(input, "superman");
  expect(screen.getByText(/superman/)).toBeInTheDocument();
});
