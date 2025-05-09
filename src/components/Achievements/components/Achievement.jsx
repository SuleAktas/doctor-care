import React from 'react';

function Achievement(props) {
  return (
    <div className="achievement-box">
      <div className="achievement-number">{props.number}</div>
      <div className="achievement-text">{props.text}</div>
    </div>
  );
}

export default Achievement;
