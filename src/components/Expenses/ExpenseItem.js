import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const  ExpenseItem = (props) => {   // useState();  // let title = props.title;
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">$ {props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
/*ejemplo de un on Click con console .log
 <button onClick = {() => {console.log("Click me!")}}>Change Title</button> */