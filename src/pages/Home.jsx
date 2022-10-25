import React, { useState } from "react";
import AddTask from "../components/AddTask/AddTask";
import TaskList from "../components/TaskList/TaskList";
import Button from "react-bootstrap/Button";
const Home = () => {
  const [isdone, setİsdone] = useState(false);

  const butonText = isdone;
  return (
    <div>
      <Button onClick={butonText} variant="danger">
        show
      </Button>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default Home;
