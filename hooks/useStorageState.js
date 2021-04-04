import { useState, useEffect } from "react";

function useStorageState(key, initVal) {
  const [state, stateSet] = useState(() => {
    let val;

    try {
      val = readStorage(key) || initVal;
    } catch {
      val = initVal;
    }

    return val;
  });

  useEffect(() => updateStorage(key, state), [key, state]);

  return [state, stateSet];
}

export default useStorageState;

function readStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function updateStorage(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}
