import { Link } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import data from "./pages/Dynamic_route_sample/data.json";

console.log(data);

function App() {
  const renderTodos = () => {
    return data.todos.map((item) => {
      return (
        <li key={item.id}>
          <Link to={item.slug}>{item.todo}</Link>
        </li>
      );
    });
  };

  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>MainPage</h1>
      <ul>{renderTodos()}</ul>
    </div>
  );
}

export default App;
