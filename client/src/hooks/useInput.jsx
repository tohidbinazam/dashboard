import { useState } from 'react';

const useInput = (int) => {
  const [input, setInput] = useState(int);

  const inputChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return { input, inputChange };
};

export default useInput;
