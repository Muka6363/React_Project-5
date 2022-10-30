import React, { useEffect, useState } from "react";
import AddTask from "../components/AddTask/AddTask";
import TaskList from "../components/TaskList/TaskList";
import Button from "react-bootstrap/Button";
import axios from "axios";
const Home = () => {
  const [isDone, setİsDone] = useState(false);
  const [text, setText] = useState("Show");
  const [task, setTask] = useState([]);

  const url = "https://6357a11dc26aac906f2e653e.mockapi.io/api/tasktracer";

  const toogle = (e) => {
    setİsDone(!isDone);
    const buttonText = isDone ? "Show" : "Hide";
    setText(buttonText);
  };

  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
    console.log(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div>
      <Button onClick={(e) => toogle()} variant="danger">
        {text}
      </Button>
      {isDone && <AddTask getTask={getTask} />}
      <TaskList task={task} />
    </div>
  );
};

export default Home;
