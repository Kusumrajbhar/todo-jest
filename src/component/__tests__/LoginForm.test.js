import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../LoginForm";
import renderer from "react-test-renderer";

it("should have a username and a password field, also submit button", () => {
  render(<LoginForm />);

  const usernameField = screen.getByLabelText(/username/i); // /username/i is a regex
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/submit/i);

  expect(usernameField).toBeInTheDocument(); // to check username in the document
  expect(passwordField).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

it("should allow the user to submit their credential", () => {
  const submit = jest.fn();
  render(<LoginForm submit={submit} />);

  const usernameField = screen.getByLabelText(/username/i); // /username/i is a regex
  const passwordField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByText(/submit/i);

  userEvent.type(usernameField, "kusum");
  userEvent.type(passwordField, "hiikusum");
  userEvent.click(submitButton);

  expect(submit).toHaveBeenCalledWith({
    username: "kusum",
    password: "hiikusum",
  });
});

test("matches snapshot", () => {
  const submit = jest.fn();
  const tree = renderer.create(<LoginForm submit={submit} />).toJSON();
  expect(tree).toMatchSnapshot();
});
