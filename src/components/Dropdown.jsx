/* eslint-disable react/prop-types */
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

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
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </div>
      {isOpen && (
        <div className="absoulute top-full border rounded p-3 shadow bg-white w-full">
          {renderedItems}
        </div>
      )}
    </div>
  );
}
