import React, { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListIemProps>`
  list-style: none;
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface ListIemProps {
  active: boolean;
}

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: ListGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
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
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListGroup;
