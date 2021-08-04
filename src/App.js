import "./App.css";
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
  ];
  return (
    <div className="App">
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
