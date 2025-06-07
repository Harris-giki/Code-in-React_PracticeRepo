//this code has been extracted from a component while practice, therefore just look for the concepts
import { MouseEvent } from "react";
import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London"];

  // Optional: Early return if no items
  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );

  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
