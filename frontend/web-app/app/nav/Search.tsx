"use client";

import { useParamsStore } from "@/hooks/useParamsStore";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  const searchTerm = useParamsStore((state) => state.searchTerm);
  const setParams = useParamsStore((state) => state.setParams);

  function handleSearch() {
    // tidak perlu apa-apa karena sudah update realtime
  }

  return (
    <div className="flex w-1/2 items-center border-2 border-gray-300 rounded-full px-4 py-3 shadow-sm">
      <input
        value={searchTerm ?? ""}
        onChange={(e) => setParams({ searchTerm: e.target.value })}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
        type="text"
        placeholder="Search for cars by make, model or color"
        className="input-custom"
      />

      <button onClick={handleSearch}>
        <FaSearch
          size={34}
          className="bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2"
        />
      </button>
    </div>
  );
}
