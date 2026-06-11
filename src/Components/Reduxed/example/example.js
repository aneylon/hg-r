import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useThunk } from "../../../Hooks/useThunk";

import { addItem, removeItemAtIndex } from "./exampleSlice";
import { fetchExample } from "./thunks/fetchExample";

export function Example() {
  const [doFetchExample, isLoadingExample, loadingExampleError] =
    useThunk(fetchExample);

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

  useEffect(() => {
    doFetchExample();
  }, [doFetchExample]);

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
        {loadingExampleError && (
          <div className="errorText">Error : {loadingExampleError.message}</div>
        )}
        {isLoadingExample && <div>...loading...</div>}

        <ul>
          {list.map((item) => {
            return (
              <li key={item.id}>
                {item.text}
                <button onClick={() => dispatch(removeItemAtIndex(item.id))}>
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
