"use client";
import { useGlobalContext } from "@/app/context/GlobalContext";
import React from "react";

const Modal = ({
  children,
  setEditModal,
  setDeleteModal,
  editModal,
  deleteModal,
}: {
  children: React.ReactNode;
  editModal?: boolean;
  deleteModal?: boolean;
  setEditModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteModal?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { closeModal } = useGlobalContext();
  // console.log(user);
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      if (!editModal && !deleteModal) closeModal();
      if (editModal && setEditModal) setEditModal(false);
      if (deleteModal && setDeleteModal) setDeleteModal(false);
      // console.log(user);
      // Close modal if the background (overlay) is clicked
    }
  };
  return (
    <div>
      <div
        id="default-modal"
        aria-hidden="true"
        onClick={handleOverlayClick}
        className="bg-black backdrop-blur-sm bg-opacity-40 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[100vh] max-h-full"
      >
        {/* <div className="relative w-full max-w-2xl overflow-y-auto rounded-md max-h-[80vh]">
          {/* Modal content 
          {children}
        </div> */}
        <div className="relative w-full max-w-2xl rounded-md overflow-hidden">
          {/* Inner container with scroll */}
          <div className="overflow-y-auto max-h-[70vh] bg-white dark:bg-gray-700 rounded-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
