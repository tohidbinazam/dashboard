import { useState } from 'react';

const useInput = (int) => {
  const [input, setInput] = useState(int);

  const handleInputChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return { input, handleInputChange };
};

export default useInput;
