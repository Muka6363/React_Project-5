import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
const TaskList = ({ task }) => {
  return (
    <div>
      {task.map((item) => {
        const { id, date, tasktracer } = item;
        return (
          <div key={id} className="d-flex justify-content-between ">
            <div>
              <h5>{tasktracer}</h5>
              <p>{date}</p>
            </div>
            <div>
              <RiDeleteBack2Fill />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
