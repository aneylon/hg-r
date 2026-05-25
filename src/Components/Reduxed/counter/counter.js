import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => {
    console.log(state);
    return state.counter.value;
  });
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(null);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="amount"
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          inc by amount
        </button>
      </div>
    </div>
  );
}
