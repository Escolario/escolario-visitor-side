import { useState } from "react";
import { CgSortAz } from "react-icons/cg";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import { TbCalendarDown, TbCalendarUp } from "react-icons/tb";

const SortButton = ({ setSelectedSort }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sortItems = [
    { icon: <AiOutlineSortAscending />, label: "A to Z", value: "ascending" },
    { icon: <AiOutlineSortDescending />, label: "Z to A", value: "descending" },
    { icon: <TbCalendarDown />, label: "Latest", value: "latest" },

    { icon: <TbCalendarUp />, label: "Oldest", value: "oldest" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        className="flex items-center justify-center rounded-md bg-brand-gray p-2 text-3xl transition-opacity hover:bg-black/30 md:h-10 md:w-16 md:text-5xl"
        onClick={toggleDropdown}
      >
        <CgSortAz />
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-24 rounded-md border bg-brand-gray shadow-lg md:w-28 lg:w-32 xl:w-36">
          <ul className="py-1">
            {sortItems.map((item, index) => (
              <li
                key={index}
                className="flex cursor-pointer items-center justify-between px-4 py-2 text-gray-800 hover:bg-blue-100
                "
                onClick={() => setSelectedSort(item.value)}
              >
                <div className="flex items-center text-lg md:text-xl lg:text-2xl xl:text-3xl">
                  {item.icon}
                </div>
                <div className="flex items-center text-xs font-bold md:text-sm lg:text-base xl:text-lg">
                  {item.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortButton;
