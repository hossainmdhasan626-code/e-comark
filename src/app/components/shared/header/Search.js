"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLazyGetProductsQuery } from "@/app/redux/api/cart/cartApi";
import Image from "next/image";
import Link from "next/link";

const Search = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const searchRef = useRef(null);

  const [fetchProducts, { data: suggestions, isFetching }] = useLazyGetProductsQuery();

  // Debounce search fetching
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        fetchProducts({ searchQuery: query });
      }
    }, 300); // 300ms delay

    return () => clearTimeout(timer);
  }, [query, fetchProducts]);

  // Click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    if (query.trim()) {
      router.push(`/?search=${encodeURIComponent(query)}`);
    } else {
      router.push(`/`);
    }
  };

  return (
    <div className="relative" ref={searchRef}>
      <form onSubmit={handleSearch}>
        <label
          className="
            input flex items-center gap-2 transition-all
            w-[150px] h-10 border-2 border-gray-50
            md:w-[500px] md:h-12 md:border-mainColor 
            md:focus-within:border-gray-50 bg-white
          "
        >
          <svg
            className="h-[1em] opacity-50 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={handleSearch}
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
            placeholder="Search products..." 
            className="grow bg-transparent" 
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
          />
        </label>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && query.trim() && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-100 z-50 max-h-96 overflow-y-auto">
          {isFetching ? (
            <div className="p-4 text-center text-gray-500">Searching...</div>
          ) : suggestions && suggestions.length > 0 ? (
            <ul className="py-2">
              {suggestions.slice(0, 5).map((product) => (
                <li key={product.id}>
                  <Link 
                    href={`/productDetails/${product.id}`}
                    onClick={() => setShowSuggestions(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                      {(product?.image || (product?.images && product?.images[0])) ? (
                        <Image 
                          src={product?.image || product?.images[0]} 
                          alt={product.title || product.name || "Product"}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-xs text-gray-400">No Img</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 truncate">{product.title || product.name}</p>
                      <p className="text-sm font-bold text-mainColor">${product.price}</p>
                    </div>
                  </Link>
                </li>
              ))}
              {suggestions.length > 5 && (
                <li>
                  <button 
                    onClick={handleSearch}
                    className="w-full text-center py-3 text-sm font-bold text-mainColor hover:bg-gray-50 transition-colors"
                  >
                    View all {suggestions.length} results
                  </button>
                </li>
              )}
            </ul>
          ) : (
            <div className="p-4 text-center text-gray-500">No products found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
