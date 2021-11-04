import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const  ExpenseItem = (props) => {
  //function
  console.log("cualquier cosa")
  const [title, setTitle] = useState(props.title);
  // useState();
  // let title = props.title;

  const clickHandler = () => {
    setTitle("Update!");
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
/*ejemplo de un on Click con console .log
 <button onClick = {() => {console.log("Click me!")}}>Change Title</button> */