"use client";

import { useRouter } from "next/navigation";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define the type for the context state
interface GlobalContextProps {
  isSidebarOpen: boolean;
  searchInput: string;
  uniqueUsers: string[];
  toggleSidebar: () => void;
  isModalOpen: boolean;
  toggleModal: () => void;
  closeModal: () => void;
  updateSearchInput: (i: string) => void;
  updateUniqueUsers: (a: string[]) => void;
  searchList: boolean;
  updateSearchList: (a: boolean) => void;
  // toggleSearchList: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

// Create the context with default values
const GlobalContext = createContext<GlobalContextProps>({
  isSidebarOpen: false,
  searchInput: "",
  uniqueUsers: [],
  toggleSidebar: () => {},
  isModalOpen: false,
  toggleModal: () => {},
  closeModal: () => {},
  updateSearchInput: () => {},
  updateUniqueUsers: () => {},
  searchList: false,
  updateSearchList: () => {},
  // toggleSearchList: () => {},
});

// Custom hook to use the GlobalContext
export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [uniqueUsers, setUniqueUsers] = useState<string[]>([]);
  const [searchList, setSearchList] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      // Check if the window width is below a certain threshold (e.g., 768px)
      if (window.innerWidth >= 768) {
        closeSidebar(); // Close the sidebar if resizing to a larger screen
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const updateSearchList = (a: boolean) => {
    setSearchList(a);
  };

  const updateSearchInput = (i: string) => {
    setSearchInput(i);
  };

  const updateUniqueUsers = (a: string[]) => {
    setUniqueUsers(a);
  };

  // const toggleSearchList = (
  //   e: React.MouseEvent<HTMLDivElement, MouseEvent>
  // ) => {
  //   if (e.target === e.currentTarget) {
  //     setSearchList(false); // Close modal if the background (overlay) is clicked
  //   }
  // };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        isModalOpen,
        toggleModal,
        closeModal,
        searchInput,
        updateSearchInput,
        uniqueUsers,
        updateUniqueUsers,
        searchList,
        updateSearchList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
