import React, { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: ListGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              if (selectedIndex === index) setSelectedIndex(-1);
              else {
                setSelectedIndex(index);
                onSelectItem(item);
              }
            }}

            // onClick={() => console.log("Clicked on ", item, ",  nr " + index)}
          >
            {item}
          </li>
        ))}
      </ul>
      ;
    </>
  );
};

export default ListGroup;
