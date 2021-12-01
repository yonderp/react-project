import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "iPad",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };
// 
// 
// 
// 
// 
// 

  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
/* meti el cambio que tenia en App.css de
.App-header {
  background-color: #282c34; a index.css
body {
  background-color: saddlebrown;
ya que habia borrado App.css xq no vi como el profe actualizo todo su project 
tremendo error por usar classname en vez de class, cual debo usar entonfces
error reparado es className con N mayus

otro mega error por un simple espacio entre nombre de clases ej
const classes = 'card ' + props.className;

crearon un nuevo componente y yo al parecer crei q venia con todo
y carpeta asi que la cree y los meti alli su js y su css
pero nunca mandaron hacer eso y yo y que WHAT?

ESTO LLEVA = EN EL MEDIO onChange={dateChangeHandler} />
PUEDO COLOCAR DOS LINEAS IGUALES DE CODIGO DONDE CONSIDERO UNA TIENE ERROR OTRA NO PARA DIFERENCIARLAS*/