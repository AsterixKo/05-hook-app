import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { HooksApp } from "./HooksApp";
import "./index.css";
// import { CallbackHook } from "./06-memos/CallbackHook";
// import { Padre } from "./07-tarea-memo/Padre";

// import { MemoHook } from "./06-memos/MemorizeHook";
// import { Memorize } from "./06-memos/Memorize";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";

// import "./08-useReducer/intro-reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    {/* <TodoApp /> */}
    <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
