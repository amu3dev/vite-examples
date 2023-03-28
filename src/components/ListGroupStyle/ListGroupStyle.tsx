// This component is used to display a list of items and using Css Modules to style the component.

import { MouseEvent, useState } from "react";
import styles from "./ListGroupStyle.module.css"

interface ListGroupStyleProps {
  items: string[];
  heading: string;
  onSelectedItem: (index: number, name: string) => void;
}

const ListGroupStyle = ({ items, heading, onSelectedItem }: ListGroupStyleProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (event: MouseEvent) => {
    console.log("Clicked", event.target, event);
  };

  return (
    <>
      <h1>{heading}</h1>
      <ul className={styles["list-group"]}>
        {" "}
        {items.length === 0 ? (
          <p>There are no cities in the list</p>
        ) : (
          items.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  selectedIndex === index
                    ? [styles["list-group-item"], styles["active"]].join(" ")
                    : styles["list-group-item"]
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
export default ListGroupStyle;
