"use client";
import clsx from "clsx";
import React, { useRef, useState } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { useOnClickOutside } from "usehooks-ts";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  selectedValue?: string;
  onSelect: (label: string) => void;
  placeholder: string;
}

export const CustomDropdown: React.FC<DropdownProps> = ({
  options,
  selectedValue = "",
  onSelect,
  placeholder,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: DropdownOption) => {
    onSelect(option.value);
    setIsOpen(false);
  };

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  const selectedLabel = selectedOption ? selectedOption.label : "";

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div className="relative w-full col-span-1" ref={ref}>
      <div
        className={clsx(
          "w-full min-w-[200px] flex flex-shrink-0 cursor-pointer rounded-lg px-3 py-2.5 bg-gray-shade-2 text-sm text-white focus:outline-none",
          isOpen && "border border-gray-shade-1"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between w-full gap-2">
          <span
            className={clsx(
              "word-break",
              selectedLabel === "" && "text-white/20"
            )}
          >
            {selectedLabel === "" ? placeholder : selectedLabel}
          </span>
          {isOpen ? (
            <SlArrowUp className="flex-shrink-0 size-3 fill-white" />
          ) : (
            <SlArrowDown className="flex-shrink-0 size-3 fill-white" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-[500] mt-2 max-h-[200px] w-full overflow-y-auto rounded-lg border border-gray-shade-1 bg-gray-shade-2 text-white shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              className={clsx(
                "word-break cursor-pointer rounded-lg px-3 py-1 hover:bg-gray-shade-1/40",
                option.value === selectedValue ? "bg-gray-shade-1/60" : ""
              )}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
