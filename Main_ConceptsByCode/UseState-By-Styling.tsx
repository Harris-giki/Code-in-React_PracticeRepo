import { MouseEvent, useState } from "react";
import { Fragment } from "react/jsx-runtime";
//import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul` list-style:none;
padding 0;`;

//defining an interface for the active state using css in JS
interface ListItemProps {
  active: boolean;
}
const ListItems = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
}
`;
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const message = items.length === 0 ? <p>No item found</p> : null;
  //Hook - a function that allows us to tap into built in features into react
  const [selectedIndex, setSelectedIndex] = useState(-1);
  /* you can also use this const to be returned through a function and then call the funct instead of the const */
  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <Fragment>
      <h1>{heading}</h1>
      {message}
      <List>
        {/* react requires a key that identifies each unique items so that it may know about the item when they are removed or added uniquely */}
        {items.map((item, index) => (
          <ListItems
            //className={ -->this implementation is the use-state without styling to make sure the active state highlighting of the list
            //selectedIndex === index
            //  ? "list-group-item active"
            //  : "list-group-item"
            //} below find the same logic implemented through styling in CSS
            active={index == selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItems>
        ))}{" "}
      </List>{" "}
      {/*We have wrapped the item.map that we created to dynamically list our items in braces because the component's funct in react.tsx only accept html*/}
    </Fragment>
  );
}

export default ListGroup;
