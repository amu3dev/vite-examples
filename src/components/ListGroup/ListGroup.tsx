import { MouseEvent, useState } from "react";
import "./ListGroup.css";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectedItem: (index: number, name: string) => void;
}

const ListGroup = ({ items, heading, onSelectedItem }: ListGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (event: MouseEvent) => {
    console.log("Clicked", event.target, event);
  };

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 ? (
          <p>There are no cities in the list</p>
        ) : (
          items.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item "
                }
                onClick={() => {
                  setSelectedIndex(index);
                  onSelectedItem(index, item);
                }}>
                {item}
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};
export default ListGroup;
