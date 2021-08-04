import { cleanup, render, screen } from "@testing-library/react";
import Todo from "../Todo";
import renderer from "react-test-renderer";

afterEach(() => {
  cleanup();
});

test("should render not completed Todo", () => {
  const todo = {
    id: 1,
    dish: "Pizza",
    completed: false,
  };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Pizza");
  expect(todoElement).not.toContainHTML("<strike>");
});

test("should render completed Todo", () => {
  const todo = {
    id: 2,
    dish: "Burger",
    completed: true,
  };
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId("todo-2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("Burger");
  expect(todoElement).not.toContainHTML("<strike>");
});

test("matches snapshot", () => {
  const todo = { id: 1, dish: "Pizza", completed: false };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("matches second snapshot", () => {
  const todo = { id: 2, dish: "Burger", completed: true };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("matches third snapshot", () => {
  const todo = { id: 3, dish: "Sandwich", completed: true };
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  expect(tree).toMatchSnapshot();
});
