import React from "react";
import Container from "react-bootstrap/esm/Container";

const AddTask = ({ tasks }) => {
  return (
    <Container>
      <div
        className="d-flex text justify-content-between bg- mb-5 "
        style={{ width: "18rem" }}
      >
        <div>
          <ul className="list">
            <li className="list-item">{tasks.title}</li>
            <li className="list-item">{tasks.date}</li>
          </ul>
        </div>
        <div>
          <button
            type="button"
            class="btn-close text-"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </Container>
  );
};

export default AddTask;
