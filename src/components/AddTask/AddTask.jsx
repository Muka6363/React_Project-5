import React, { useState } from "react";
import axios from "axios";

const AddTask = ({ getTask }) => {
  const [mytask, setMytask] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { mytask, date };
    console.log(newTask);
    addTask(newTask);
  };
  const addTask = async (newTask) => {
    const url = "https://6357a11dc26aac906f2e653e.mockapi.io/api/tasktracer";
    try {
      await axios.post(url, newTask);
    } catch (error) {
      console.log(error);
    }
  };
  getTask();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Task
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Task"
            onChange={(e) => setMytask(e.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setDate(e.value)}
          />
        </div>
        <div className="mb-3 form-check text-center"></div>
        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTask;
//onchance ıle valuelerı alıyoruz. formun onsubmıt butonuyla da yazdırıyoruz. veya bız sımdı APı ye gonderecegız.
