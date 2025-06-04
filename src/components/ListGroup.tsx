import { MouseEvent } from "react";
import { Fragment } from "react/jsx-runtime";
function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London"];
  const message = items.length === 0 ? <p>No item found</p> : null;
  /* you can also use this const to be returned through a function and then call the funct instead of the const */
  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <Fragment>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {/* react requires a key that identifies each unique items so that it may know about the item when they are removed or added uniquely */}
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}{" "}
      </ul>{" "}
      {/*We have wrapped the item.map that we created to dynamically list our items in braces because the component's funct in react.tsx only accept html*/}
    </Fragment>
  );
}

export default ListGroup;
