import "./App.css";
import LoginForm from "./component/LoginForm";
import Todo from "./component/Todo";

function App() {
  const todoList = [
    {
      id: 1,
      dish: "Burger",
      completed: false,
    },
    {
      id: 2,
      dish: "Pizza",
      completed: true,
    },
    {
      id: 3,
      dish: "Sandwich",
      completed: true,
    },
    {
      id: 4,
      dish: "chicken roll",
      completed: false,
    },
    {
      id: 5,
      dish: "Starter",
      completed: true,
    },
    {
      id: 6,
      dish: "Coffee",
      completed: false,
    },
    {
      id: 7,
      dish: "Tea",
      completed: true,
    },
    {
      id: 8,
      dish: "Water",
      completed: false,
    },
    {
      id: 9,
      dish: "Frankie",
      completed: false,
    },
  ];
  return (
    <div className="App">
      <LoginForm submit={(values) => alert(JSON.stringify(values))} />
      {todoList.map((todo, index) => {
        return (
          <p key={index}>
            <Todo todo={todo} />
          </p>
        );
      })}
    </div>
  );
}

export default App;
