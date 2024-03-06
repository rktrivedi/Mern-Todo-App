import React, {useState} from "react";
import "./Todo.css";
import {MdSubtitles} from "react-icons/md";
import {BiSolidMessageRoundedDetail} from "react-icons/bi";
import Cards from "../TodoCards/Cards";

const Todo = () => {
  const [input, setInputs] = useState({title: "", body: ""});
  const [Array, setArray] = useState([]);

  const inputChange = (e) => {
    const {name, value} = e.target;
    setInputs({...input, [name]: value});
  };
  const submit = () => {
    console.log(input);
    setArray([...Array, input]);
    console.log(Array);
    setInputs({title: "", body: ""});
  };
  return (
    <div className="mainContanier">
      <div className="todo-main">
        <div className="Input-area">
          <h3>Add Your Task </h3>
          <div className="input-box">
            <input
              type="text"
              placeholder="Title"
              value={input.title}
              onChange={inputChange}
              name="title"
            />
            <MdSubtitles className="icon" />
          </div>
          <div className="input-box textarea">
            <textarea
              type="text"
              placeholder=""
              value={input.body}
              onChange={inputChange}
              name="body"
            />
            {/* <BiSolidMessageRoundedDetail className="icon" /> */}
          </div>
          <button onClick={submit} type="submit">
            Add Task
          </button>
        </div>
      </div>
      <div className="cardlist">
        <div className="'todolist">
          <div className="todolistcard">
            <div className="container">
              {Array &&
                Array.map((item, idx) => (
                  <>
                    <Cards />
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
