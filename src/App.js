import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Periodico",
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
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
error reparado es className con N mayus*/