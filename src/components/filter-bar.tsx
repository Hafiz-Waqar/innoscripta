import React from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import { CustomDropdown } from "./shared/custom-dropdown";
import { categoryList, sourceList } from "./shared/data";
import { FilterData } from "../pages/main-home";

interface FilterBarProps {
  filterdata: FilterData;
  setFilterData: React.Dispatch<React.SetStateAction<FilterData>>;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filterdata,
  setFilterData,
}) => {
  return (
    <div className="grid items-center w-full grid-cols-1 gap-1 mx-auto xs:grid-cols-2 sm:grid-cols-3 xl:w-fit lg:gap-2 sm:mx-0">
      <CustomDropdown
        placeholder="Source"
        options={sourceList}
        selectedValue={filterdata.source}
        onSelect={(data: string) => {
          setFilterData({ ...filterdata, source: data, category: "" });
        }}
      />
      <CustomDropdown
        placeholder="Categories"
        options={categoryList}
        selectedValue={filterdata.category}
        onSelect={(data: string) => {
          setFilterData({ ...filterdata, category: data, source: "" });
        }}
      />
      <div className="col-span-1 xs:col-span-2 sm:col-span-1">
        <Datepicker
          primaryColor="teal"
          useRange={false}
          asSingle={true}
          value={filterdata.date}
          onChange={(newValue: DateValueType) => {
            if (newValue === null) return;
            setFilterData({
              ...filterdata,
              date: newValue,
            });
          }}
          inputClassName="w-full lg:min-w-[150px] cursor-pointer rounded-lg px-3 py-2.5 bg-gray-shade-2 text-sm text-white placeholder-white/20 focus:outline-none focus:border border-gray-shade-1 lg:flex-grow-0"
        />
      </div>
    </div>
  );
};
