"use client";

import { useState, useEffect } from "react";
import { glossaryData } from "@/data/glossaryData";
import { ArrowUp } from "lucide-react";
export default function GlossaryPage() {
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [searchTerm, setSearchTerm] = useState("");
  const [showButton, setShowButton] = useState(false);

  // Show button after scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Filter logic
  const filteredData = glossaryData.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    // If user is typing → ignore selectedLetter
    if (searchTerm.trim() !== "") {
      return matchesSearch;
    }

    // If no search → filter by selected letter
    return item.term
      .toLowerCase()
      .startsWith(selectedLetter.toLowerCase());
  });

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Hero Section */}
      <div
        className="h-[467px] flex flex-col justify-center items-center text-center px-6"
        style={{
          background: "linear-gradient(180deg, #053269 0%, #6A9FE0 100%);",


        }}
      >
        {/* Heading */}
        <h1
          className="
      text-white

      /* 📱 Mobile (default) */
      font-archivo font-bold
      text-[25.01px]
      leading-[120%]

      /* 💻 Desktop */
      md:font-poppins
      md:text-[48.83px]
      md:leading-[150%]
    "
        >
          Accounting Glossary: <br />
          A–Z Terminology
        </h1>

        {/* Paragraph */}
        <p
          className="
      text-white mt-4

      /* 📱 Mobile */
      font-mona font-normal
      text-[16px]
      leading-[150%]

      /* 💻 Desktop */
      md:font-poppins
    "
        >
          A quick reference for key audit and accounting terms in the UAE.
        </p>

        {/* Search Input */}
        <div className="mt-6">
          <div className="relative w-fit">

            <input
              type="text"
              placeholder="Search Glossary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
        bg-[#F3F3F566]
        text-[#1C5396]
        placeholder:text-[#1C5396]
        outline-none
        font-medium

        /* 📱 Mobile */
        w-[259px]
        h-[33px]
        px-[18px]
        pr-[45px]   /* space for image */
        rounded-[10px]
        text-[16px]

        /* 💻 Desktop */
        md:w-[512px]
        md:h-[48px]
        md:px-6
        md:pr-[50px]
      "
            />

            {/* Right Side Image */}
            <img
              src="/images/search-icon.svg"
              alt="search"
              className="
        absolute
        right-3
        top-1/2
        -translate-y-1/2
        w-[18px]
        h-[18px]
        pointer-events-none
      "
            />

          </div>
        </div>
      </div>



      {/* Alphabet Navigation */}
      <div
        className="
    w-full
    h-[35.333335876464844px]
    px-6 md:px-[48px]
    bg-[#08406D]
    flex
    items-center
    justify-center
  "
      >
        <div className="flex items-center justify-center gap-4 w-full max-w-[1200px]">

          {/* Text */}
          <div
            className="
        text-white
        font-poppins
        font-normal
        text-[16px]
        leading-[120%]
        tracking-[-0.02em]
        whitespace-nowrap
      "
          >
            Go to Section :
          </div>

          {/* Letters Wrapper */}
          <div
            className="
    max-[1063px]:overflow-x-auto
    min-[1064px]:overflow-visible
  "
            style={{
              scrollbarWidth: "none",        // Firefox
              msOverflowStyle: "none",       // IE/Edge
            }}
          >
            <div
              className="
          flex
          min-w-max
          justify-center
          max-[1063px]:gap-[12px]
          min-[1064px]:gap-[24px]
        "
            >
              {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => {

                const isDisabledLetter = ["X", "Y", "Z"].includes(letter);

                return (
                  <span
                    key={letter}
                    onClick={() => {
                      if (!isDisabledLetter) {
                        setSelectedLetter(letter);
                        setSearchTerm("");
                      }
                    }}
                    className={`
                cursor-pointer
                font-poppins
                text-[16px]
                leading-[120%]
                tracking-[-0.02em]
                capitalize
                transition-colors

                ${isDisabledLetter
                        ? "text-[#787878] font-normal cursor-not-allowed"
                        : `
                      text-white
                      font-semibold
                      hover:text-yellow-400
                      ${selectedLetter === letter
                          ? "text-yellow-400"
                          : ""
                        }
                    `
                      }
              `}
                  >
                    {letter}
                  </span>
                );
              })}
            </div>
          </div>

        </div>
      </div>



      {/* 📚 Glossary Content */}
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={index}>
              <h3
                className="
      font-poppins
      font-semibold
      text-[20px]
      md:text-[24px]
      text-[#1C5396]
      leading-[120%]
      tracking-[-0.02em]
    "
              >
                {item.term}
              </h3>

              <p
                className="font-poppins font-normal text-[14px] md:text-[16px] text-[#4E4E4E] mt-2 leading-[150%]
">
                {item.description}
              </p>
            </div>

          ))
        ) : (
          <p className="text-gray-500 text-center">
            No results found.
          </p>
        )}
        <button
          onClick={scrollToTop}
          className="
    ml-auto
    flex items-center gap-2
    hover:opacity-70
    transition-opacity
  "
        >
          <span
            className="
      font-poppins
      font-medium
      text-[16px]
      leading-[150%]
      tracking-[0.02em]
      text-center
      text-black
       cursor-pointer
    "
          >
            Back to the Top
          </span>

          <img
            src="/images/arrow.svg"
            alt="Back to top"
            className="w-[32px] h-[32px] opacity-100"
          />
        </button>

      </div>

    </div>
  );
}
