import React, {useState} from "react";
import "./Cards.css";
import {MdDelete} from "react-icons/md";
import {MdEditSquare} from "react-icons/md";
import {FaCheckSquare} from "react-icons/fa";
import {TbProgressAlert} from "react-icons/tb";
import {IoIosArrowDown} from "react-icons/io";
import {IoIosArrowUp} from "react-icons/io";

const Cards = ({title, body, id, delid, updateList}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cards">
      <div className="heading" onClick={toggleAccordion}>
        <h6>{title}</h6>
        <span>
          {isOpen ? (
            <IoIosArrowDown className="icon" />
          ) : (
            <IoIosArrowUp className="icon" />
          )}
        </span>
      </div>

      {isOpen && (
        <div>
          <div className="body">
            <p>{body}</p>
          </div>
          <div className="buttons">
            <TbProgressAlert className="icons" />
            <FaCheckSquare className="icons" />
            <MdEditSquare onClick={updateList} className="icons" />
            <MdDelete className="icons" onClick={() => delid(id)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
