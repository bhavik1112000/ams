import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface SideBarProps {
  isSidebarOpen: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ isSidebarOpen }) => {
  const pathname = usePathname();
  return (
    <>
      <aside
        id="logo-sidebar"
        className={`
          
        flex grow flex-row space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2 w-full
        fixed top-0 left-0 z-40 lg:w-64 lg:h-screen pt-14 lg:pt-20 transition-transform bg-white border-r border-gray-200  dark:bg-gray-800 dark:border-gray-700 `}
        aria-label="Sidebar"
      >
        {/* ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} */}
        {/* lg:translate-x-0 */}
        {/* -translate-x-full */}
        <Link
          href="/asset-inventory"
          className={clsx(
            "flex m-2 h-[40px] grow items-center justify-center gap-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 lg:flex-none lg:justify-start mx-3 mr-1.5 lg:mr-3 lg:p-2 lg:px-3",
            {
              // "bg-sky-100 text-blue-600 dark:hover:bg-sky-100":
              " text-gray-900 bg-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700":
                pathname === "/asset-inventory",
            }
          )}
        >
          <svg
            className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
          >
            <defs></defs>
            <g
              style={{
                stroke: "none",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "none",
                fillRule: "nonzero",
                opacity: 1,
              }}
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                d="M 35.813 54.013 H 4.514 C 2.025 54.013 0 51.987 0 49.498 V 4.514 C 0 2.025 2.025 0 4.514 0 h 31.299 c 2.489 0 4.514 2.025 4.514 4.514 v 44.984 C 40.328 51.987 38.303 54.013 35.813 54.013 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,80,192)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 35.813 90 H 4.514 C 2.025 90 0 87.975 0 85.485 V 69.741 c 0 -2.489 2.025 -4.515 4.514 -4.515 h 31.299 c 2.489 0 4.514 2.025 4.514 4.515 v 15.744 C 40.328 87.975 38.303 90 35.813 90 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,109,255)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 85.485 90 H 54.187 c -2.489 0 -4.515 -2.025 -4.515 -4.515 V 40.501 c 0 -2.489 2.025 -4.514 4.515 -4.514 h 31.299 c 2.489 0 4.515 2.025 4.515 4.514 v 44.984 C 90 87.975 87.975 90 85.485 90 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,80,192)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 85.485 24.773 H 54.187 c -2.489 0 -4.515 -2.025 -4.515 -4.515 V 4.514 C 49.672 2.025 51.697 0 54.187 0 h 31.299 C 87.975 0 90 2.025 90 4.514 v 15.745 C 90 22.748 87.975 24.773 85.485 24.773 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,109,255)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
            </g>
          </svg>
          <p className="hidden lg:block">Asset Inventory</p>
        </Link>
        <Link
          href="/repair-maintenance"
          className={clsx(
            "flex m-2 h-[40px] grow items-center justify-center gap-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 lg:flex-none lg:justify-start !mx-3 lg:!ml-3 !ml-1.5  lg:p-2 lg:px-3",
            {
              // "bg-sky-100 text-blue-600 dark:hover:bg-sky-100":
              "text-gray-900 bg-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700":
                pathname === "/repair-maintenance",
            }
          )}
        >
          <svg
            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            id="maintenance"
          >
            <path
              fill="#b0c4da"
              d="m7.868 6.489 9.9 9.9-1.415 1.414-9.899-9.9z"
            ></path>
            <path
              fill="#99b5ce"
              d="m16.8 15.5-.8.8-9-9-.6.6 9.9 9.9.6-.6.8-.8z"
            ></path>
            <path
              fill="#b0c4da"
              d="M5 7.9 2.9 5.8 5.7 3l2.1 2.1c.4.4.4 1 0 1.4L6.4 7.9c-.4.4-1 .4-1.4 0z"
            ></path>
            <path
              fill="#99b5ce"
              d="M6 6.9 3.9 4.8l-1 1L5 7.9c.4.4 1 .4 1.4 0l1-1c-.4.4-1 .4-1.4 0z"
            ></path>
            <path
              fill="#ed5c23"
              d="M20.5 17.8c-.4-.4-.4-1 0-1.4l-1.4 1.4-.7.7-2.1 2.1c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l2.1-2.1.7-.7 1.4-1.4c-.3.4-1 .4-1.4 0z"
            ></path>
            <path
              fill="#f47321"
              d="M24.1 28.4 17.7 22l4.2-4.2 6.4 6.4c.8.8.8 2 0 2.8l-1.4 1.4c-.8.8-2 .8-2.8 0zM14.879 19.217l4.242-4.243 1.414 1.415-4.242 4.242z"
            ></path>
            <path
              fill="#e55123"
              d="M19.3 20.5c.2-.4.2-.9-.2-1.2-.4-.4-1-.4-1.4 0l2.1-2.1.5-.5c0-.1.1-.2.2-.2l-1.4 1.4-.7.7-2.1 2.1c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l1.6-1.6z"
            ></path>
            <path
              fill="#ed5c23"
              d="m25.5 27.1-6.4-6.4-1.4 1.3 6.4 6.4c.8.8 2 .8 2.8 0l1.1-1.1c-.8.5-1.8.4-2.5-.2zm-9.2-9.2 2.9-2.9h-.1l-4.2 4.2 1.4 1.4 1.4-1.4z"
            ></path>
            <path
              fill="#607d95"
              d="m27.9 7.6-2.8 2.8-2.8-.7-.7-2.8 2.8-2.8L23 2.7l-3.7 3.7.9 3.3-4.6 4.6 2.1 2.1-1.4 1.4-2.1-2.1-4.5 4.5-3.3-.9L2.7 23l1.4 1.4 2.8-2.8 2.8.7.7 2.8-2.8 2.8L9 29.3l3.7-3.7-.9-3.3 10.5-10.5 3.3.9L29.3 9z"
            ></path>
            <path
              fill="#4b6c85"
              d="m27.9 7.6-2.8 2.8-2.8-.7-3.9 4c-.4.4-1 .4-1.4 0l-.4-.4-1 1 1.1 1.1 1 1-1.4 1.4-1-1-1.1-1.1-1 1 .4.4c.4.4.4 1 0 1.4l-3.9 3.8.7 2.8-2.8 2.8L9 29.3l3.7-3.7-.9-3.3 5.9-5.9 1-1 3.5-3.5 3.3.9L29.3 9l-1.4-1.4z"
            ></path>
            <path
              fill="#004463"
              d="M25.5 27.5c-.1 0-.3 0-.4-.1l-4.9-5c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l4.9 5c.2.2.2.5 0 .7-.1 0-.2.1-.3.1zm1.4-1.4c-.1 0-.3 0-.4-.1l-4.9-5c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l4.9 5c.2.2.2.5 0 .7-.1 0-.2.1-.3.1z"
            ></path>
            <path
              fill="#004463"
              d="M25.5 29.5c-.6 0-1.3-.2-1.8-.7l-6.4-6.4c-.1-.1-.1-.2-.1-.4s.1-.3.1-.4l4.2-4.2c.2-.2.5-.2.7 0l6.4 6.4c.5.5.7 1.1.7 1.8s-.3 1.3-.7 1.8l-1.4 1.4c-.4.4-1.1.7-1.7.7zM18.4 22l6 6c.6.6 1.5.6 2.1 0l1.4-1.4c.3-.3.4-.7.4-1.1 0-.4-.2-.8-.4-1.1l-6-6-3.5 3.6zm-2.1-3.7c-.1 0-.3 0-.4-.1L6 8.2c-.2-.1-.2-.5 0-.7l1.4-1.4c.2-.2.5-.2.7 0L18 16c.2.2.2.5 0 .7l-1.4 1.4c-.1.1-.2.2-.3.2zM7.1 7.9l9.2 9.2.7-.7-9.2-9.2-.7.7z"
            ></path>
            <path
              fill="#004463"
              d="M9 29.8c-.1 0-.3 0-.4-.1l-1.4-1.4c-.2-.2-.2-.5 0-.7L9.9 25l-.6-2.2-2.3-.7-2.6 2.6c-.2.2-.5.2-.7 0l-1.4-1.4c-.1-.1-.1-.2-.1-.4s.1-.3.1-.4L6 18.9c.1-.1.3-.2.5-.1l3 .8 4.3-4.3c.2-.2.5-.2.7 0l1.8 1.8.7-.7-1.8-1.8c-.2-.2-.2-.5 0-.7l4.4-4.4-.8-3c0-.2 0-.4.1-.5l3.7-3.7c.2-.2.5-.2.7 0l1.4 1.4c.2.2.2.5 0 .7L22.1 7l.6 2.2 2.3.7 2.6-2.6c.2-.2.5-.2.7 0l1.4 1.4c.1.1.1.2.1.4s-.1.3-.1.4L26 13.1c-.1.1-.3.2-.5.1l-3-.8-10.1 10 .8 3c0 .2 0 .4-.1.5l-3.7 3.7c-.1.2-.2.2-.4.2zm-.7-1.9.7.7 3.2-3.2-.8-3c0-.2 0-.4.1-.5l4.1-4.1-1.4-1.4-4.1 4.1c-.1.1-.3.2-.5.1l-3-.8L3.4 23l.7.7 2.4-2.4c.1-.1.3-.2.5-.1l2.8.7c.2 0 .3.2.4.4l.7 2.8c0 .2 0 .4-.1.5l-2.5 2.3zm8-13.6 1.4 1.4 4.2-4.2c.1-.1.3-.2.5-.1l3 .8L28.6 9l-.7-.7-2.4 2.4c-.1.1-.3.2-.5.1l-2.8-.7c-.2 0-.3-.2-.4-.4L21.1 7c0-.2 0-.4.1-.5l2.4-2.4-.6-.7-3.2 3.2.8 3c0 .2 0 .4-.1.5l-4.2 4.2zM5.7 8.7c-.4 0-.8-.1-1.1-.4L2.5 6.1c-.1-.1-.1-.2-.1-.3s.1-.3.1-.4l2.8-2.8c.1-.1.2-.1.4-.1.1 0 .3.1.4.1l2.1 2.1c.2.3.4.7.4 1.1 0 .4-.2.8-.4 1.1L6.7 8.2c-.2.3-.6.5-1 .5zM3.6 5.8l1.8 1.8c.2.2.5.2.7 0l1.4-1.4c0-.2.1-.3.1-.4 0-.1-.1-.3-.1-.4L5.7 3.7 3.6 5.8z"
            ></path>
            <path
              fill="#004463"
              d="M17.7 22.5c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7.1-.1.1-.2.1-.3 0-.1-.1-.3-.1-.4-.2-.2-.5-.2-.7 0-.2.2-.5.2-.7 0-.1-.1-.1-.2-.1-.4s0-.3.1-.4l4.2-4.2c.2-.2.5-.2.7 0 .1.1.1.2.1.4s0 .3-.1.4c-.2.2-.2.5 0 .7.2.2.5.2.7 0 .2-.2.5-.2.7 0s.2.5 0 .7L18 22.4c0 .1-.2.1-.3.1zm-.1-2.5c.1.1.3.2.4.3.1.1.2.3.3.4l2.2-2.2c-.1-.1-.3-.2-.4-.3-.1-.1-.2-.3-.3-.4L17.6 20z"
            ></path>
            <path
              fill="#004463"
              d="M16.3 21.1c-.1 0-.3 0-.4-.1l-1.4-1.4c-.2-.2-.2-.5 0-.7l4.2-4.2c.2-.2.5-.2.7 0l1.4 1.4c.2.2.2.5 0 .7L16.6 21c-.1.1-.2.1-.3.1zm-.7-1.9.7.7 3.5-3.5-.7-.7-3.5 3.5z"
            ></path>
          </svg>
          <p className="hidden lg:block">Repair & Management</p>
        </Link>
        {/* <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/asset-inventory"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="256"
                  height="256"
                  viewBox="0 0 256 256"
                  xmlSpace="preserve"
                >
                  <defs></defs>
                  <g
                    style={{
                      stroke: "none",
                      strokeWidth: 0,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "none",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <path
                      d="M 35.813 54.013 H 4.514 C 2.025 54.013 0 51.987 0 49.498 V 4.514 C 0 2.025 2.025 0 4.514 0 h 31.299 c 2.489 0 4.514 2.025 4.514 4.514 v 44.984 C 40.328 51.987 38.303 54.013 35.813 54.013 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(0,80,192)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="matrix(1 0 0 1 0 0)"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 35.813 90 H 4.514 C 2.025 90 0 87.975 0 85.485 V 69.741 c 0 -2.489 2.025 -4.515 4.514 -4.515 h 31.299 c 2.489 0 4.514 2.025 4.514 4.515 v 15.744 C 40.328 87.975 38.303 90 35.813 90 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(0,109,255)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="matrix(1 0 0 1 0 0)"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 85.485 90 H 54.187 c -2.489 0 -4.515 -2.025 -4.515 -4.515 V 40.501 c 0 -2.489 2.025 -4.514 4.515 -4.514 h 31.299 c 2.489 0 4.515 2.025 4.515 4.514 v 44.984 C 90 87.975 87.975 90 85.485 90 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(0,80,192)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="matrix(1 0 0 1 0 0)"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 85.485 24.773 H 54.187 c -2.489 0 -4.515 -2.025 -4.515 -4.515 V 4.514 C 49.672 2.025 51.697 0 54.187 0 h 31.299 C 87.975 0 90 2.025 90 4.514 v 15.745 C 90 22.748 87.975 24.773 85.485 24.773 z"
                      style={{
                        stroke: "none",
                        strokeWidth: 1,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "rgb(0,109,255)",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform="matrix(1 0 0 1 0 0)"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>

                <span className="ms-3">Asset Inventory</span>
              </a>
            </li>
            <li>
              <a
                href="repair&maintenance"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  id="maintenance"
                >
                  <path
                    fill="#b0c4da"
                    d="m7.868 6.489 9.9 9.9-1.415 1.414-9.899-9.9z"
                  ></path>
                  <path
                    fill="#99b5ce"
                    d="m16.8 15.5-.8.8-9-9-.6.6 9.9 9.9.6-.6.8-.8z"
                  ></path>
                  <path
                    fill="#b0c4da"
                    d="M5 7.9 2.9 5.8 5.7 3l2.1 2.1c.4.4.4 1 0 1.4L6.4 7.9c-.4.4-1 .4-1.4 0z"
                  ></path>
                  <path
                    fill="#99b5ce"
                    d="M6 6.9 3.9 4.8l-1 1L5 7.9c.4.4 1 .4 1.4 0l1-1c-.4.4-1 .4-1.4 0z"
                  ></path>
                  <path
                    fill="#ed5c23"
                    d="M20.5 17.8c-.4-.4-.4-1 0-1.4l-1.4 1.4-.7.7-2.1 2.1c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l2.1-2.1.7-.7 1.4-1.4c-.3.4-1 .4-1.4 0z"
                  ></path>
                  <path
                    fill="#f47321"
                    d="M24.1 28.4 17.7 22l4.2-4.2 6.4 6.4c.8.8.8 2 0 2.8l-1.4 1.4c-.8.8-2 .8-2.8 0zM14.879 19.217l4.242-4.243 1.414 1.415-4.242 4.242z"
                  ></path>
                  <path
                    fill="#e55123"
                    d="M19.3 20.5c.2-.4.2-.9-.2-1.2-.4-.4-1-.4-1.4 0l2.1-2.1.5-.5c0-.1.1-.2.2-.2l-1.4 1.4-.7.7-2.1 2.1c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l1.6-1.6z"
                  ></path>
                  <path
                    fill="#ed5c23"
                    d="m25.5 27.1-6.4-6.4-1.4 1.3 6.4 6.4c.8.8 2 .8 2.8 0l1.1-1.1c-.8.5-1.8.4-2.5-.2zm-9.2-9.2 2.9-2.9h-.1l-4.2 4.2 1.4 1.4 1.4-1.4z"
                  ></path>
                  <path
                    fill="#607d95"
                    d="m27.9 7.6-2.8 2.8-2.8-.7-.7-2.8 2.8-2.8L23 2.7l-3.7 3.7.9 3.3-4.6 4.6 2.1 2.1-1.4 1.4-2.1-2.1-4.5 4.5-3.3-.9L2.7 23l1.4 1.4 2.8-2.8 2.8.7.7 2.8-2.8 2.8L9 29.3l3.7-3.7-.9-3.3 10.5-10.5 3.3.9L29.3 9z"
                  ></path>
                  <path
                    fill="#4b6c85"
                    d="m27.9 7.6-2.8 2.8-2.8-.7-3.9 4c-.4.4-1 .4-1.4 0l-.4-.4-1 1 1.1 1.1 1 1-1.4 1.4-1-1-1.1-1.1-1 1 .4.4c.4.4.4 1 0 1.4l-3.9 3.8.7 2.8-2.8 2.8L9 29.3l3.7-3.7-.9-3.3 5.9-5.9 1-1 3.5-3.5 3.3.9L29.3 9l-1.4-1.4z"
                  ></path>
                  <path
                    fill="#004463"
                    d="M25.5 27.5c-.1 0-.3 0-.4-.1l-4.9-5c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l4.9 5c.2.2.2.5 0 .7-.1 0-.2.1-.3.1zm1.4-1.4c-.1 0-.3 0-.4-.1l-4.9-5c-.2-.2-.2-.5 0-.7.2-.2.5-.2.7 0l4.9 5c.2.2.2.5 0 .7-.1 0-.2.1-.3.1z"
                  ></path>
                  <path
                    fill="#004463"
                    d="M25.5 29.5c-.6 0-1.3-.2-1.8-.7l-6.4-6.4c-.1-.1-.1-.2-.1-.4s.1-.3.1-.4l4.2-4.2c.2-.2.5-.2.7 0l6.4 6.4c.5.5.7 1.1.7 1.8s-.3 1.3-.7 1.8l-1.4 1.4c-.4.4-1.1.7-1.7.7zM18.4 22l6 6c.6.6 1.5.6 2.1 0l1.4-1.4c.3-.3.4-.7.4-1.1 0-.4-.2-.8-.4-1.1l-6-6-3.5 3.6zm-2.1-3.7c-.1 0-.3 0-.4-.1L6 8.2c-.2-.1-.2-.5 0-.7l1.4-1.4c.2-.2.5-.2.7 0L18 16c.2.2.2.5 0 .7l-1.4 1.4c-.1.1-.2.2-.3.2zM7.1 7.9l9.2 9.2.7-.7-9.2-9.2-.7.7z"
                  ></path>
                  <path
                    fill="#004463"
                    d="M9 29.8c-.1 0-.3 0-.4-.1l-1.4-1.4c-.2-.2-.2-.5 0-.7L9.9 25l-.6-2.2-2.3-.7-2.6 2.6c-.2.2-.5.2-.7 0l-1.4-1.4c-.1-.1-.1-.2-.1-.4s.1-.3.1-.4L6 18.9c.1-.1.3-.2.5-.1l3 .8 4.3-4.3c.2-.2.5-.2.7 0l1.8 1.8.7-.7-1.8-1.8c-.2-.2-.2-.5 0-.7l4.4-4.4-.8-3c0-.2 0-.4.1-.5l3.7-3.7c.2-.2.5-.2.7 0l1.4 1.4c.2.2.2.5 0 .7L22.1 7l.6 2.2 2.3.7 2.6-2.6c.2-.2.5-.2.7 0l1.4 1.4c.1.1.1.2.1.4s-.1.3-.1.4L26 13.1c-.1.1-.3.2-.5.1l-3-.8-10.1 10 .8 3c0 .2 0 .4-.1.5l-3.7 3.7c-.1.2-.2.2-.4.2zm-.7-1.9.7.7 3.2-3.2-.8-3c0-.2 0-.4.1-.5l4.1-4.1-1.4-1.4-4.1 4.1c-.1.1-.3.2-.5.1l-3-.8L3.4 23l.7.7 2.4-2.4c.1-.1.3-.2.5-.1l2.8.7c.2 0 .3.2.4.4l.7 2.8c0 .2 0 .4-.1.5l-2.5 2.3zm8-13.6 1.4 1.4 4.2-4.2c.1-.1.3-.2.5-.1l3 .8L28.6 9l-.7-.7-2.4 2.4c-.1.1-.3.2-.5.1l-2.8-.7c-.2 0-.3-.2-.4-.4L21.1 7c0-.2 0-.4.1-.5l2.4-2.4-.6-.7-3.2 3.2.8 3c0 .2 0 .4-.1.5l-4.2 4.2zM5.7 8.7c-.4 0-.8-.1-1.1-.4L2.5 6.1c-.1-.1-.1-.2-.1-.3s.1-.3.1-.4l2.8-2.8c.1-.1.2-.1.4-.1.1 0 .3.1.4.1l2.1 2.1c.2.3.4.7.4 1.1 0 .4-.2.8-.4 1.1L6.7 8.2c-.2.3-.6.5-1 .5zM3.6 5.8l1.8 1.8c.2.2.5.2.7 0l1.4-1.4c0-.2.1-.3.1-.4 0-.1-.1-.3-.1-.4L5.7 3.7 3.6 5.8z"
                  ></path>
                  <path
                    fill="#004463"
                    d="M17.7 22.5c-.1 0-.3 0-.4-.1-.2-.2-.2-.5 0-.7.1-.1.1-.2.1-.3 0-.1-.1-.3-.1-.4-.2-.2-.5-.2-.7 0-.2.2-.5.2-.7 0-.1-.1-.1-.2-.1-.4s0-.3.1-.4l4.2-4.2c.2-.2.5-.2.7 0 .1.1.1.2.1.4s0 .3-.1.4c-.2.2-.2.5 0 .7.2.2.5.2.7 0 .2-.2.5-.2.7 0s.2.5 0 .7L18 22.4c0 .1-.2.1-.3.1zm-.1-2.5c.1.1.3.2.4.3.1.1.2.3.3.4l2.2-2.2c-.1-.1-.3-.2-.4-.3-.1-.1-.2-.3-.3-.4L17.6 20z"
                  ></path>
                  <path
                    fill="#004463"
                    d="M16.3 21.1c-.1 0-.3 0-.4-.1l-1.4-1.4c-.2-.2-.2-.5 0-.7l4.2-4.2c.2-.2.5-.2.7 0l1.4 1.4c.2.2.2.5 0 .7L16.6 21c-.1.1-.2.1-.3.1zm-.7-1.9.7.7 3.5-3.5-.7-.7-3.5 3.5z"
                  ></path>
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">
                  Repair & Maintenance
                </span>
              </a>
            </li>
          </ul>
        </div> */}
      </aside>
    </>
  );
};

export default SideBar;
