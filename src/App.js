import React, { Fragment } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputToDo from "./components/InputToDo";
import ListToDo from "./components/ListToDo";
import { TaskProvider } from "./contexts/TaskContext";
import "./utils/Styles.scss";

function App() {
  return (
    <Fragment>
      <ToastContainer />

      <TaskProvider>
        <div className="app">
          <InputToDo />
          <ListToDo />
        </div>
      </TaskProvider>
    </Fragment>
  )
}

export default App;
