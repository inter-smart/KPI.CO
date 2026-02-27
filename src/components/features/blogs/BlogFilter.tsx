"use client";

import * as React from "react";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";

type BlogFilterProps = {
    activeFilters: string[];
    onFilterChange: (filters: string[]) => void;
    onApply: () => void;
    onClear: () => void;
};

const categories = ["Audit", "Advisory", "Corporate Services", "Risk", "Tax"];
const sortOptions = ["Newest to Oldest", "Oldest to Newest"];

export default function BlogFilter({
    activeFilters,
    onFilterChange,
    onApply,
    onClear,
}: BlogFilterProps) {
    const [tempFilters, setTempFilters] = React.useState<string[]>(activeFilters);
    const [isOpen, setIsOpen] = React.useState(false);
    const [isSortOpen, setIsSortOpen] = React.useState(false);
    const [selectedSort, setSelectedSort] = React.useState("Latest Posts");

    // Update temp filters when activeFilters changes or modal opens
    React.useEffect(() => {
        if (isOpen) {
            setTempFilters(activeFilters);
        }
    }, [activeFilters, isOpen]);

    const toggleFilter = (category: string) => {
        if (tempFilters.includes(category)) {
            setTempFilters(tempFilters.filter((f) => f !== category));
        } else {
            setTempFilters([...tempFilters, category]);
        }
    };

    const handleApply = () => {
        onFilterChange(tempFilters);
        onApply();
        setIsOpen(false);
    };

    const handleClear = () => {
        setTempFilters([]);
        onClear();
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <button className="text-[14px] md:text-[12px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[21px] h-full flex items-center gap-2.5 px-4 xl:px-6 py-2.5 z-[999999] rounded-[8px] xl:rounded-[10px] 3xl:rounded-[13px] cursor-pointer text-[#4E4E4E] font-medium shadow-[0_0_26px_rgba(0,0,0,0.05)] focus:outline-none">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"  >
                        <path d="M5.49333 1.75687H0.888889C0.653141 1.75687 0.427049 1.85052 0.26035 2.01722C0.0936505 2.18392 0 2.41001 0 2.64576C0 2.88151 0.0936505 3.1076 0.26035 3.2743C0.427049 3.441 0.653141 3.53465 0.888889 3.53465H5.49333C5.68018 4.04945 6.021 4.49424 6.46948 4.80857C6.91796 5.1229 7.45234 5.29152 8 5.29152C8.54766 5.29152 9.08204 5.1229 9.53052 4.80857C9.979 4.49424 10.3198 4.04945 10.5067 3.53465H16.8889C17.1246 3.53465 17.3507 3.441 17.5174 3.2743C17.6841 3.1076 17.7778 2.88151 17.7778 2.64576C17.7778 2.41001 17.6841 2.18392 17.5174 2.01722C17.3507 1.85052 17.1246 1.75687 16.8889 1.75687H10.5067C10.3198 1.24207 9.979 0.797279 9.53052 0.482951C9.08204 0.168624 8.54766 2.06941e-06 8 2.06941e-06C7.45234 2.06941e-06 6.91796 0.168624 6.46948 0.482951C6.021 0.797279 5.68018 1.24207 5.49333 1.75687ZM8.88889 2.64576C8.88889 2.82156 8.83676 2.99342 8.73908 3.1396C8.64141 3.28578 8.50259 3.39971 8.34016 3.46699C8.17774 3.53426 7.99901 3.55187 7.82659 3.51757C7.65416 3.48327 7.49577 3.39861 7.37146 3.2743C7.24715 3.14999 7.16249 2.9916 7.12819 2.81917C7.09389 2.64675 7.1115 2.46802 7.17877 2.3056C7.24605 2.14317 7.35998 2.00435 7.50616 1.90667C7.65234 1.809 7.82419 1.75687 8 1.75687C8.23575 1.75687 8.46184 1.85052 8.62854 2.01722C8.79524 2.18392 8.88889 2.41001 8.88889 2.64576ZM10.8267 7.97909H0.888889C0.653141 7.97909 0.427049 8.07274 0.26035 8.23944C0.0936505 8.40614 0 8.63223 0 8.86798C0 9.10373 0.0936505 9.32982 0.26035 9.49652C0.427049 9.66322 0.653141 9.75687 0.888889 9.75687H10.8267C11.0135 10.2717 11.3543 10.7165 11.8028 11.0308C12.2513 11.3451 12.7857 11.5137 13.3333 11.5137C13.881 11.5137 14.4154 11.3451 14.8639 11.0308C15.3123 10.7165 15.6532 10.2717 15.84 9.75687H16.8889C17.1246 9.75687 17.3507 9.66322 17.5174 9.49652C17.6841 9.32982 17.7778 9.10373 17.7778 8.86798C17.7778 8.63223 17.6841 8.40614 17.5174 8.23944C17.3507 8.07274 17.1246 7.97909 16.8889 7.97909H15.84C15.6532 7.46429 15.3123 7.0195 14.8639 6.70517C14.4154 6.39085 13.881 6.22222 13.3333 6.22222C12.7857 6.22222 12.2513 6.39085 11.8028 6.70517C11.3543 7.0195 11.0135 7.46429 10.8267 7.97909ZM14.2222 8.86798C14.2222 9.04379 14.1701 9.21565 14.0724 9.36182C13.9747 9.508 13.8359 9.62193 13.6735 9.68921C13.5111 9.75649 13.3323 9.77409 13.1599 9.73979C12.9875 9.70549 12.8291 9.62083 12.7048 9.49652C12.5805 9.37221 12.4958 9.21382 12.4615 9.0414C12.4272 8.86897 12.4448 8.69024 12.5121 8.52782C12.5794 8.3654 12.6933 8.22657 12.8395 8.1289C12.9857 8.03123 13.1575 7.97909 13.3333 7.97909C13.5691 7.97909 13.7952 8.07274 13.9619 8.23944C14.1286 8.40614 14.2222 8.63223 14.2222 8.86798ZM3.71556 14.2013H0.888889C0.653141 14.2013 0.427049 14.295 0.26035 14.4617C0.0936505 14.6284 0 14.8545 0 15.0902C0 15.326 0.0936505 15.552 0.26035 15.7187C0.427049 15.8854 0.653141 15.9791 0.888889 15.9791H3.71556C3.9024 16.4939 4.24323 16.9387 4.6917 17.253C5.14018 17.5673 5.67456 17.736 6.22222 17.736C6.76988 17.736 7.30427 17.5673 7.75274 17.253C8.20122 16.9387 8.54204 16.4939 8.72889 15.9791H16.8889C17.1246 15.9791 17.3507 15.8854 17.5174 15.7187C17.6841 15.552 17.7778 15.326 17.7778 15.0902C17.7778 14.8545 17.6841 14.6284 17.5174 14.4617C17.3507 14.295 17.1246 14.2013 16.8889 14.2013H8.72889C8.54204 13.6865 8.20122 13.2417 7.75274 12.9274C7.30427 12.6131 6.76988 12.4444 6.22222 12.4444C5.67456 12.4444 5.14018 12.6131 4.6917 12.9274C4.24323 13.2417 3.9024 13.6865 3.71556 14.2013ZM7.11111 15.0902C7.11111 15.266 7.05898 15.4379 6.96131 15.584C6.86363 15.7302 6.72481 15.8442 6.56239 15.9114C6.39996 15.9787 6.22124 15.9963 6.04881 15.962C5.87638 15.9277 5.718 15.8431 5.59368 15.7187C5.46937 15.5944 5.38471 15.436 5.35041 15.2636C5.31612 15.0912 5.33372 14.9125 5.401 14.75C5.46827 14.5876 5.58221 14.4488 5.72838 14.3511C5.87456 14.2534 6.04642 14.2013 6.22222 14.2013C6.45797 14.2013 6.68406 14.295 6.85076 14.4617C7.01746 14.6284 7.11111 14.8545 7.11111 15.0902Z" fill="#4E4E4E" />
                    </svg>

                    Filters
                </button>
            </DialogTrigger>
            <DialogContent className="max-w-[95%] lg:max-w-[900px] p-[25px] xl:p-[32px] 2xl:p-[40px] border-none shadow-2xl rounded-[10px] overflow-visible">
                {/* Custom Close Button matching image */}
                <DialogClose className="absolute right-6 top-6  w-[24px] 2xl:w-[32px] h-[24px] 2xl:h-[32px] cursor-pointer flex items-center justify-center bg-[#FFC107] rounded-[9px] text-black hover:bg-[#FFB300] transition-colors focus:outline-none z-50">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.500091 0.499999L8.3811 8.38101" stroke="#212121" stroke-linecap="round" />
                        <path d="M8.38248 0.506927L0.501465 8.38794" stroke="#212121" stroke-linecap="round" />
                    </svg>
                </DialogClose>

                <div className="space-y-10">
                    {/* Sort Selection */}
                    <div className="relative inline-block min-w-[250px] ">
                        <button
                            onClick={() => setIsSortOpen(!isSortOpen)}
                            className={cn(
                                "text-[14px] md:text-[15px] xl:text-[16px] text-[#4E4E4E]  flex items-center gap-3 px-3 py-2.5 w-full bg-white border border-black/10 rounded-[10px] h-[42px] cursor-pointer font-medium transition-all min-w-[200px] justify-between",
                                isSortOpen ? "" : "border-gray-200"
                            )}
                        >
                            <span>
                                Sort by <span className="text-[#1C5396] ml-1">{selectedSort}</span>
                            </span>
                            <ChevronDown
                                size={18}
                                className={cn("text-gray-400 transition-transform duration-200", isSortOpen && "rotate-180")}
                            />
                        </button>

                        {/* Dropdown Menu */}
                        {isSortOpen && (
                            <div className="relative w-full bg-[#f2f2f2]  border-gray-100 rounded-[15px] overflow-hidden z-40  ">
                                {sortOptions.map((option, idx) => (
                                    <button
                                        key={option}
                                        onClick={() => {
                                            setSelectedSort(option);
                                            setIsSortOpen(false);
                                        }}
                                        className={cn(
                                            "w-full px-2 py-2 text-[12px] font-semibold text-center transition-colors cursor-pointer",
                                            idx === 0 ? "bg-[#cccccc] text-[#053269] rounded-[8px]" : "text-gray-500 hover:bg-gray-200"
                                        )}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Categories Section */}
                    <div className="mb-[30px]">
                        <h3 className="text-[14px] sm:text-[18px] 2xl:text-[20px] 3xl:text-[24px] font-semibold text-[#1C5396] tracking-tight mb-[15px]">Categories</h3>

                        <div className="flex flex-wrap gap-4">
                            {categories.map((category) => {
                                const isActive = tempFilters.includes(category);
                                return (
                                    <button
                                        key={category}
                                        onClick={() => toggleFilter(category)}
                                        className={cn(
                                            "px-6 py-2.5 rounded-[10px] text-[16px] text-[#4E4E4E] font-medium transition-all duration-200 border cursor-pointer",
                                            isActive
                                                ? "bg-[#f0f7ff] border-none flex items-center gap-3"
                                                : "bg-white border-black-40 hover:border-gray-300"
                                        )}
                                    >
                                        {category}
                                        {isActive && <X size={16} strokeWidth={2.5} />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="flex items-center gap-3 sm:gap-4 w-full max-w-[400px] h-[48px]">
                        <div className="w-1/2 h-full">
                            <button
                                onClick={handleApply}
                                className="flex items-center w-full h-full justify-center bg-[#FFC916]  cursor-pointer text-black font-medium rounded-[10px] transition-all shadow-md shadow-yellow-100 hover:scale-100 text-[14px] xl:text-[18px] 2xl:text-[20px]"
                            >
                                Apply Filters
                            </button>
                        </div>
                        <div className="w-1/2 h-full">
                            <button
                                onClick={handleClear}
                                className="flex items-center w-full h-full justify-center bg-white border border-[#FFC916] cursor-pointer   text-gray-700 font-medium rounded-[10px] hover:bg-gray-50 transition-all hover:scale-100   text-[14px] xl:text-[18px] 2xl:text-[20px]"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
