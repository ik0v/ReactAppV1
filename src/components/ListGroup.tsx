import React, { useState } from "react";

const ListGroup = () => {
  // const items = [];
  const items = ["Tokyo", "London", "Paris", "San Francisco", "New York"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // Event handler
  const handleClick = (item: string) => console.log(item);

  return (
    <>
      <h1>List</h1>
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
                handleClick(item);
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
