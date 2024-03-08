import React, {useState} from "react";
import "./Todo.css";
import {MdSubtitles} from "react-icons/md";
import {BiSolidMessageRoundedDetail} from "react-icons/bi";
import Cards from "../TodoCards/Cards";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Update from "./Update";

const Todo = () => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [input, setInputs] = useState({title: "", body: ""});
  const [Array, setArray] = useState([]);
  const [updateTaskIndex, setUpdateTaskIndex] = useState(-1);

  const inputChange = (e) => {
    const {name, value} = e.target;
    setInputs({...input, [name]: value});
  };
  const submit = () => {
    if (input.title === "" || input.body === "") {
      toast.error("Title and Body Can't be Empty");
    } else {
      setArray([...Array, input]);
      console.log(Array);
      setInputs({title: "", body: ""});
      toast.success("Your Task Is Added");
    }
  };

  const deleteTodo = (id) => {
    Array.splice(id, "1");
    setArray([...Array]);
  };

  const openUpdateModal = (idx) => {
    setUpdateTaskIndex(idx);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  const handleUpdate = (updatedTitle, updatedBody) => {
    const updatedTaskArray = [...Array];

    // Use the stored index to update the specific task
    if (updateTaskIndex !== -1) {
      updatedTaskArray[updateTaskIndex] = {
        title: updatedTitle,
        body: updatedBody,
      };

      setArray(updatedTaskArray);
      toast.success("Task Updated Successfully");
    }

    closeUpdateModal();
  };

  return (
    <div className="mainContanier">
      <div className="todo-main">
        <ToastContainer toastStyle={{backgroundColor: "black"}} />
        <div className="Input-area">
          <h3>Add Your Task </h3>
          <div className="input-box">
            <input
              maxLength="50"
              type="text"
              placeholder="Title"
              value={input.title}
              onChange={inputChange}
              name="title"
            />
            <MdSubtitles className="icon" />
          </div>
          <div className=" textarea">
            <textarea
              type="text"
              placeholder=""
              value={input.body}
              onChange={inputChange}
              name="body"
            />
            {/* <BiSolidMessageRoundedDetail className="icon" /> */}
          </div>
          <div className="button">
            <button onClick={submit} type="submit">
              Add Task
            </button>
          </div>
        </div>
      </div>
      <div className="cardlist">
        <div className="controls">
          <input type="search"></input>
          <button onClick={submit} type="submit">
            Add Task
          </button>
        </div>
        <div className="container1">
          {Array &&
            Array.map((item, idx) => (
              <>
                <Cards
                  key={idx}
                  id={idx}
                  delid={deleteTodo}
                  title={item.title}
                  body={item.body}
                  updateList={() => openUpdateModal(idx)}
                />
                {isUpdateModalOpen && (
                  <Update onClose={closeUpdateModal} onUpdate={handleUpdate} />
                )}
              </>
            ))}
        </div>
        <div className="pagination">
          <h6>1</h6>
          <h6>2</h6>
          <h6>3</h6>
          <h6>4</h6>
        </div>
      </div>
      <div className="todo-update">
        <Update />
      </div>
    </div>
  );
};

export default Todo;
