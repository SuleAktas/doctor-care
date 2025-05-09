import React from 'react';
import './Solution.css';

function Solution(props) {
  return (
    <div className="solution-box">
      <div className="solution-check">
        <div className="solution-check-mark"></div>
      </div>
      <div className="solution-title">{props.title}</div>
      <div className="solution-text">{props.text}</div>
    </div>
  );
}

export default Solution;
