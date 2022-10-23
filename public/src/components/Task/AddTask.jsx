import React from "react";
import Container from "react-bootstrap/esm/Container";

const AddTask = ({ tasks, setTasks }) => {
  const handleDelete = (e) => {
    console.log(e.target.id);
    tasks = tasks.filter((del) => {
      return del.id !== Number(e.target.id);
    });
    console.log(tasks);
    setTasks(tasks);
  };
  console.log(tasks);
  return (
    <div
      className="d-flex text justify-content-between bg- mb-5 "
      style={{ width: "18rem" }}
    >
      {tasks.map((item) => {
        // burada desctr da yapabılırdık---> const[title, id, date] = item
        return (
          <>
            <div>
              <ul className="list">
                <li className="list-item">{tasks.title}</li>
                <li className="list-item">{tasks.date}</li>
              </ul>
            </div>
            <div>
              <button
                onClick={handleDelete}
                type="button"
                class="btn-close text-"
                aria-label="Close"
              ></button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default AddTask;
