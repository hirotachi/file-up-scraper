import {useState} from "react";


function InputHandler(text) {
  const [value, setValue] = useState(text);
  const handleValueChange = (e) => {
    const text = e.target.value;
    setValue(text);
  };
  const reset = (resetValue = "") => {
    setValue(resetValue)
  };
  return {onChange: handleValueChange, value, reset}
}

export default InputHandler;