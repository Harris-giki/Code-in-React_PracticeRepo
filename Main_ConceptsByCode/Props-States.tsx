//this code has been extracted from a component while practice, therefore just look for the concepts
import { MouseEvent, useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  if (items.length === 0)
    return (
      <>
        <h1>{heading}</h1>
        <p>No item found</p>
      </>
    );

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Fragment>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;

// Thus Here's how you can use your ListGroup component in a parent component like App.tsx:
{
  /*import ListGroup from "./ListGroup";

function App() {
  const cities = ["New York", "San Francisco", "Tokyo", "London"];

  return <ListGroup items={cities} heading="Cities" />;
}

export default App;*/
}
