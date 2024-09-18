/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Dropdown({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedItems = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.value}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleClick}>{value?.label || "Select..."}</div>
      {isOpen && <div>{renderedItems}</div>}
    </div>
  );
}
