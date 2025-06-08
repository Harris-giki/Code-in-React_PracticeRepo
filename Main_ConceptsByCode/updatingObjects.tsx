import { useState } from "react";

function App() {
  //its better to group related state properties into a single object,
  //below is the state variable object Drink with 2 properties,
  //i.e: title and Price
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  //now wanting to change one of the properties on some event as done below will now work
  {
    /*const handleClick = () =>
{
    drink.price =6;
    setDrink(drink);
}*/

      const newDrink = {
        title: drink.title,
        price: 6,
      };
      setDrink(newDrink);
    };
  }
  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
    </div>
  );
}
