import { useState, type MouseEvent } from "react";
import Alert from "../Alert";

import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  border: 2px solid blue;
`;

interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li<ListItemProps>`
  color: red;
  font-weight: bold;
  border: 2px solid grey;
  padding: 10px;
  background: ${(props) => (props.active ? "blue" : "green")};
`;
// List colne of UL melement weith this style

// Interface - Defining Shape of the component

interface Props {
  items: string[];
  title: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, title, onSelectItem }: Props) => {
  // State Variable

  //useState is deprecated - React 17 useVariable

  console.log("List Group");
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //console.log(items);
  //let selectedIndex = 0;

  //let items = null;
  // map()
  //let title = "Cities";
  //const message = items.length === 0 ? <p>No items found</p> : null;

  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  };

  // Seperation of concern

  // Event Handler Function

  //{backgroundColor: 'yellow', color: #fff}

  return (
    <>
      <section>
        <h1>List Group Component</h1>
        <h2 style={{ backgroundColor: "yellow", color: "red", padding: "10px" }}>{title}</h2>
        {/* {items.length === 0 ? <p>No items found</p> : null} */}
        {/* {message} */}
        {items.length === 0 && <p>No items found</p>}
        {/* {getMessage()} */}
        <List>
          {items.map((item, index) => (
            <ListItem
              active={index == selectedIndex}
              key={item}
              className=""
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </ListItem>
          ))}
        </List>
      </section>
    </>
  );
};

export default ListGroup;
