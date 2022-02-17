import React from "react";

function SelectorButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}     // current "pressed" state of toggle buttons (all, inprogress,completed)
      onClick={() => props.setFilter(props.name)}
    >
      <span>{props.name}</span>      
    </button>
  );
}

export default SelectorButton;
 // "props.name" :-   shows "ALL" Task ,shows "In_Progress" Task,shows "Completed" Task
 