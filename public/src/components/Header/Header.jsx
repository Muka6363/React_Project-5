import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import AddTask from "../Task/AddTask";
import Task from "../Task/Task";
import ButtonAdd from "./Button";

const Header = () => {
  const [btnChange, setBtnChange] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleClick = () => {
    setBtnChange(!btnChange);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  console.log(tasks);
  return (
    <Container className="text-center">
      <h1>Task Tracker</h1>
      <ButtonAdd handleClick={handleClick} btnChange={btnChange} />
      <Task btnChange={btnChange} addTask={addTask} />
      <AddTask tasks={tasks} setTasks={setTasks} />
    </Container>
  );
};

export default Header;
