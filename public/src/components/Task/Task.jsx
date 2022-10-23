import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";

const Task = ({ btnChange, addTask }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleSubmit = () => {
    const isdone = false;
    const id = Math.random() * 1000;
    addTask({ title, date, id, isdone });
    setTitle("");
    setDate("");
  };
  return (
    <Container className="my-5 mb-2 ">
      {btnChange ? (
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              TASK
            </label>
            <input
              onChange={handleTitle}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Add Task"
              value={title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              DAY & TIME
            </label>
            <input
              onChange={handleDate}
              type="datetime-local"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Add Day & Time"
              value={date}
            />
          </div>

          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      ) : (
        <p> No Show A Task</p>
      )}
    </Container>
  );
};

export default Task;
