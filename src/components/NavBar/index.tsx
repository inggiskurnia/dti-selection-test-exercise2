"use client";

import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useDebounce, useDebouncedCallback } from "use-debounce";

const Navbar: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debounceValue] = useDebounce(searchQuery, 1000);

  const searchEvent = async (id: number) => {
    try {
      const response = await axios.get(`http://localhost:3000/events/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    searchEvent(Number(debounceValue));
  }, [debounceValue]);

  return (
    <div className="bg-white text-black flex justify-between p-4">
      <div className="flex gap-2 items-center">
        <p>Home</p>
        <p>Page 1</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search Item"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-b-gray-500 border-2 p-2"
        ></input>
      </div>
    </div>
  );
};

export default Navbar;
