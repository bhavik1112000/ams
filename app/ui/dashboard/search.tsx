"use client";

import { useGlobalContext } from "@/app/context/GlobalContext";
import { assets } from "@/data";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Search = () => {
  // let uniqueUsers: string[] = [];

  const {
    searchInput,
    searchList,
    updateSearchList,
    updateSearchInput,
    updateUniqueUsers,
    uniqueUsers,
  } = useGlobalContext();

  const searchContainerRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchInput(e.target.value);
    console.log(searchInput);
    // if (
    //   uniqueUsers.length > 0 &&
    //   e.target.value.toLowerCase() === uniqueUsers[0].toLowerCase()
    // ) {
    //   setSearchList(false);
    // } else {
    //   setSearchList(true);
    // }
  };

  const handleFocus = () => {
    updateSearchList(true);
  };

  // const handleBlur = () => {
  //   setSearchList(false);
  // };

  // useEffect(() => {
  //   const userList: string[] = assets
  //     .filter((asset) =>
  //       asset.user.toLowerCase().includes(searchInput.toLowerCase())
  //     )
  //     .map((asset) => asset.user);

  //   // Step 2: Use Set to get unique brands
  //   // const uniqueUsers = [...new Set(userList)];
  //   console.log(userList);

  //   setUniqueUsers([]);

  //   userList.forEach((user) => {
  //     if (!uniqueUsers.includes(user)) {
  //       setUniqueUsers([...uniqueUsers, user]);
  //                                                           never set a state in a loop.
  //     }
  //   });

  //   console.log(uniqueUsers);
  // }, [searchInput]);

  useEffect(() => {
    // Step 1: Filter and map users based on search input
    const userList = assets
      .filter((asset) =>
        asset.user.toLowerCase().includes(searchInput.toLowerCase())
      )
      .map((asset) => asset.user);

    updateUniqueUsers(Array.from(new Set(userList)));
    console.log(searchInput);

    // uniqueUsers.filter((user)=>user.toLowerCase().includes(searchInput.toLowerCase()))
    // if (uniqueUsers.length > 0) setSearchList(true);
  }, [searchInput]);

  useEffect(() => {
    // Function to handle clicks outside the search component
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        updateSearchList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // console.log(uniqueUsers);

  const closeSearchList = (user: string) => {
    updateSearchInput(user);
    updateSearchList(false);
  };

  const handleClick = (user: string) => {
    router.push(`/asset-inventory/${user.toLowerCase()}`);
  };

  return (
    <div>
      <form className="relative max-w-full sm:max-w-lg mx-auto lg:mx-0 p-6 pb-0 md:p-12 md:pb-0">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative" ref={searchContainerRef}>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              autoComplete="off"
              name="searchInput"
              value={searchInput}
              // onBlur={handleBlur}
              onFocus={handleFocus}
              className="block w-full px-4 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search user..."
              onChange={changeHandler}
              // onClick={() => setSearchList(true)}
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-[7px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
          {searchList && (
            <div className="bg-gray-700 mt-2 max-h-36 z-10 rounded-md p-4 w-auto max-w-md dark:text-white absolute top-11 right-0 left-0">
              {uniqueUsers.length > 0 ? (
                uniqueUsers.map((user, index) => (
                  <div
                    className="pb-1 cursor-pointer text-gray-400 dark:hover:text-white"
                    key={index}
                    onClick={() => {
                      closeSearchList(user);
                      handleClick(user);
                    }}
                  >
                    <p>{user}</p>
                  </div>
                ))
              ) : (
                <div>User doesn't exists.</div>
              )}
              {/* {uniqueUsers.map((user, index) => (
              <div
                className="pb-1 cursor-pointer text-gray-400 dark:hover:text-white"
                key={index}
                onClick={() => closeSearchList(user)}
              >
                <p>{user}</p>
              </div>
            ))} */}
            </div>
          )}
        </div>
        {/* {SearchList && uniqueUsers.length > 0 && (
          <div className="bg-gray-700 mt-2 rounded-md p-4 max-w-md dark:text-white ">
            {uniqueUsers.map((user, index) => (
              <div
                className="pb-1 cursor-pointer text-gray-400 dark:hover:text-white"
                key={index}
                onClick={() => closeSearchList(user)}
              >
                <p>{user}</p>
              </div>
            ))}
          </div>
        )} */}
      </form>
    </div>
  );
};

export default Search;
