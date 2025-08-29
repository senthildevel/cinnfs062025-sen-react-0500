import { useState, type MouseEvent } from "react";

// Interface - Defining Shape of the component

interface Props {
  items: string[];
  title: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, title, onSelectItem }: Props) => {
  // State Variable

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

  return (
    <>
      <h2>{title}</h2>
      {/* {items.length === 0 ? <p>No items found</p> : null} */}

      {/* {message} */}

      {items.length === 0 && <p>No items found</p>}

      {/* {getMessage()} */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item} className={selectedIndex === index ? "list-group-item active" : "list-group-item"} onClick={() => onSelectItem(item)}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
