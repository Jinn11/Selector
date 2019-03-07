import React from 'react';
import './App.css';

var Shape = (props) => {
  var shape = props.shape;
  var selectShape = props.selectShape
  return (
    <div className={props.shape} onClick={() => selectShape(shape)} />
  )
}

export default Shape;
