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

  const del = (id) => {
    console.log(id);
  };
  return (
    <div className="mainContanier">
      <div className="todo-main">
        <div className="Input-area">
          <h3>Add Your Task </h3>
          <div className="input-box">
            <input
              maxlength="50"
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
                  id={idx}
                  key={idx}
                  delid={del}
                  title={item.title}
                  body={item.body}
                />
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
    </div>
  );
};

export default Todo;
