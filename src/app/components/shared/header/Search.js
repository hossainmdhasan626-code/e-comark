"use client";

import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const rout = useRouter();

  // debouncedErJonno3rdPartyUseKorchi
  const handleChange = useDebouncedCallback((e) => {
    // searchErValue
    const value = e.target.value;

    // URLSearchParams()DiyeParamsKePoribortonKoriToEta
    // suduUnderTheHoodEChangeAneUrlEchangeAnarJonno
    // useSearchParams()KeUseKori
    const params = new URLSearchParams();

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    rout.push(`?${params.toString()}`);
  }, 500);

  return (
    <>
      <label
        className="input flex md:justify-center md:items-center gap-3  transition-all
         w-[150px] h-10 border-2 
         md:w-[500px] md:h-12 md:border-mainColor
        md:focus-within:border-gray-50"
      >
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          className="grow"
          placeholder="Search"
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default Search;
