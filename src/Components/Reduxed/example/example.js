import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { addItem, removeItemAtIndex } from "./exampleSlice";

export function Example() {
  const dispatch = useDispatch();
  const list = useSelector((state) => {
    console.log(state);
    return state.example.list;
  });
  const [newItem, setNewItem] = useState("");
  const addNewItem = () => {
    dispatch(addItem(newItem));
    // todo: wait?
    setNewItem("");
  };
  return (
    <div>
      <h1>This an example</h1>
      <div>
        <input
          type="text"
          name="newItem"
          id="newItem"
          placeholder="new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={addNewItem}>Add new item</button>
      </div>
      <div>
        <h2>teh list</h2>
        <ul>
          {list.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
