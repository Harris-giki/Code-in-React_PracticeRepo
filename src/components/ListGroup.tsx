import { Fragment } from "react/jsx-runtime";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];
  items = [];

  if (items.length == 0)
    return (
      <>
        <h1>List</h1>
        <p>No Item Found</p>
      </>
    );

  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {/* react requires a key that identifies each unique items so that it may know about the item when they are removed or added uniquely */}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}{" "}
      </ul>{" "}
      {/*We have wrapped the item.map that we created to dynamically list our items in braces because the component's funct in react.tsx only accept html*/}
    </Fragment>
  );
}

export default ListGroup;
