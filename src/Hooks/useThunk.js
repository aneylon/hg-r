import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

export function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap((args) => {
          console.log("test", args);
        })
        .catch((err) => {
          console.error("error: ");
          setError(err);
        })
        .finally(() => {
          console.log("finally");
          setIsLoading(false);
        });
    },
    [dispatch, thunk],
  );
  return [runThunk, isLoading, error];
}
