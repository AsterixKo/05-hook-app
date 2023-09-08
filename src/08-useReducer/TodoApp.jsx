import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar la piedra del tiempo",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    console.log(todo);
  };
  return (
    <>
      <h1>
        TodoApp 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* TodoList */}
          <ul className="list-group">
            {todos.map((todo) => (
              // TodoItem ...
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between"
              >
                <span>Item 1</span>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          {/* TodoAdd onNewTodo(todo)  */}
          {/* id: new Date()..., description: '', done: false */}
          <h4>Agergar Todo</h4>
          <hr />
          <form>
            <input
              type="text"
              placeholder="¿Qué hay que hacer?"
              className="form-control"
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Agregar
            </button>
          </form>
          {/* fin TodoAdd  */}
        </div>
      </div>
    </>
  );
};
