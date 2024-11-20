// "use client";

// import React, { useEffect, useState } from "react";
// import Search from "./search";
// import { assets } from "@/data";
// import Card from "./card";
// import Modal from "./modal";
// import DeleteModalContent from "./deleteModalContent";
// import EditModalContent from "./editModalContent";
// import clsx from "clsx";

// const UserDetails = ({ type }: { type: string }) => {
//   const [editModal, setEditModal] = useState<boolean>(false);
//   const [deleteModal, setDeleteModal] = useState<boolean>(false);
//   const [serialNo, setSerialNo] = useState<string>("");
//   const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState<string>("");
//   const [availableAssetsSerialNo, setAvailableAssetsSerialNo] = useState<
//     string[]
//   >([]);

//   //   let uniqueCategories: string[];

//   const getSerialNo = (no: string) => {
//     setSerialNo(no);
//   };
//   const handleCategorySelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedCategory(e.target.value);
//     const a = assets
//       .filter(
//         (asset) =>
//           asset.category === e.target.value && asset.status === "available"
//       )
//       .map((asset) => asset.serialNo);
//     console.log(a);
//     setAvailableAssetsSerialNo(a);
//   };
//   useEffect(() => {
//     setUniqueCategories(
//       Array.from(new Set(assets.map((asset) => asset.category)))
//     );
//   }, []);
//   //   useEffect(() => {
//   //     const a = assets
//   //       .filter(
//   //         (asset) =>
//   //           asset.category === selectedCategory && asset.status === "available"
//   //       )
//   //       .map((asset) => asset.serialNo);
//   //     console.log(a);
//   //     setAvailableAssetsSerialNo(a);
//   //   }, [selectedCategory]);
//   console.log(selectedCategory);
//   console.log(availableAssetsSerialNo);
//   return (
//     <>
//       <Search />
//       <div className="p-6 md:p-12">
//         <h3 className="text-xl mb-5 font-semibold text-gray-900 dark:text-white">
//           Assigned Assets
//         </h3>

//         <div className="relative grid grid-cols-4 gap-3 flex-wrap">
//           {assets
//             .filter((asset) => asset.user.toLowerCase() === type)
//             .map((asset) => (
//               <div>
//                 <Card
//                   id={asset.serialNo}
//                   category={asset.category}
//                   serialNo={asset.serialNo}
//                   brand={asset.brand}
//                   model={asset.model}
//                   editModal={editModal}
//                   setEditModal={setEditModal}
//                   deleteModal={deleteModal}
//                   setDeleteModal={setDeleteModal}
//                   isClickable={false}
//                   getSerialNo={getSerialNo}
//                 />
//               </div>
//             ))}
//         </div>
//         <div className="mt-6 md:mt-12">
//           <h3 className="text-xl mb-5 font-semibold text-gray-900 dark:text-white">
//             Assign a New Asset
//           </h3>
//           <form className="max-w-full">
//             <div className="w-full flex gap-3">
//               <select
//                 id="countries"
//                 onChange={(e) => handleCategorySelection(e)}
//                 className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               >
//                 <option value="" disabled hidden selected>
//                   Select Category
//                 </option>
//                 {uniqueCategories.map((category) => (
//                   <option
//                     value={category}
//                     key={category}
//                     className={`${
//                       category === "cpu" ? "uppercase" : "capitalize"
//                     }`}
//                   >
//                     {category === "cpu"
//                       ? category.toUpperCase()
//                       : category.charAt(0).toUpperCase() +
//                         category.slice(1).toLowerCase()}
//                   </option>
//                 ))}
//                 {/* <option selected>Available Replacements</option> */}
//                 {/* <option value="US">United States</option>
//             <option value="CA">Canada</option>
//             <option value="FR">France</option>
//             <option value="DE">Germany</option> */}
//               </select>
//               <select
//                 id="countries"
//                 className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               >
//                 <option value="" disabled hidden selected>
//                   Select available {selectedCategory}
//                 </option>
//                 {availableAssetsSerialNo.map((serialNo) => (
//                   <option>{serialNo}</option>
//                 ))}
//                 {/* <option selected>Available Replacements</option> */}
//                 {/* <option value="US">United States</option>
//             <option value="CA">Canada</option>
//             <option value="FR">France</option>
//             <option value="DE">Germany</option> */}
//               </select>
//             </div>
//             <div className="text-end">
//               <button
//                 type="button"
//                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//               >
//                 Assign another asset
//               </button>
//             </div>
//           </form>
//         </div>
//         {(deleteModal === true || editModal === true) && (
//           <Modal
//             editModal={editModal}
//             deleteModal={deleteModal}
//             setEditModal={setEditModal}
//             setDeleteModal={setDeleteModal}
//           >
//             {deleteModal && <DeleteModalContent serialNo={serialNo} />}
//             {editModal && <EditModalContent serialNo={serialNo} user={type} />}
//           </Modal>
//         )}
//       </div>
//     </>
//   );
// };

// export default UserDetails;

"use client";

import React, { useEffect, useState } from "react";
import Search from "./search";
import { assets } from "@/data";
import Card from "./card";
import Modal from "./modal";
import DeleteModalContent from "./deleteModalContent";
import EditModalContent from "./editModalContent";

const UserDetails = ({ type }: { type: string }) => {
  const [editModal, setEditModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [serialNo, setSerialNo] = useState<string>("");
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [selections, setSelections] = useState<
    {
      selectedCategory: string;
      selectedAsset: string;
      availableSerialNos: string[];
    }[]
  >([{ selectedCategory: "", selectedAsset: "", availableSerialNos: [] }]);

  const getSerialNo = (no: string) => {
    setSerialNo(no);
  };

  const handleCategorySelection = (index: number, category: string) => {
    const availableSerialNos = assets
      .filter(
        (asset) => asset.category === category && asset.status === "available"
      )
      .map((asset) => asset.serialNo);

    const updatedSelections = [...selections];
    updatedSelections[index] = {
      selectedCategory: category,
      selectedAsset: "", // Reset selected asset when category changes
      availableSerialNos,
    };
    setSelections(updatedSelections);
  };

  const handleAssetSelection = (index: number, asset: string) => {
    const updatedSelections = [...selections];
    updatedSelections[index].selectedAsset = asset;
    setSelections(updatedSelections);
  };

  const addSelection = () => {
    setSelections([
      ...selections,
      { selectedCategory: "", selectedAsset: "", availableSerialNos: [] },
    ]);
  };

  const deleteSelection = (index: number) => {
    const updatedSelections = selections.filter((_, i) => i !== index);
    setSelections(updatedSelections);
  };

  useEffect(() => {
    setUniqueCategories(
      Array.from(new Set(assets.map((asset) => asset.category)))
    );
  }, []);

  return (
    <>
      <Search />
      <div>
        <div className="p-6 md:p-12">
          <h3 className="text-xl mb-5 font-semibold text-gray-900 dark:text-white">
            Assigned Assets
          </h3>

          <div className="relative grid grid-cols-4 gap-3 flex-wrap">
            {assets
              .filter((asset) => asset.user.toLowerCase() === type)
              .map((asset) => (
                <div key={asset.serialNo}>
                  <Card
                    id={asset.serialNo}
                    category={asset.category}
                    serialNo={asset.serialNo}
                    brand={asset.brand}
                    model={asset.model}
                    editModal={editModal}
                    setEditModal={setEditModal}
                    deleteModal={deleteModal}
                    setDeleteModal={setDeleteModal}
                    isClickable={false}
                    getSerialNo={getSerialNo}
                  />
                </div>
              ))}
          </div>
          <form className="mt-6 md:mt-12 rounded-md  dark:bg-gray-800 dark:border-gray-700 bg-white border border-gray-200">
            <div className="p-6 border-b  dark:border-gray-600">
              <h3 className="text-xl mb-5 font-semibold text-gray-900 dark:text-white">
                Assign a New Asset
              </h3>
              <div className="max-w-full">
                {selections.map((selection, index) => (
                  <div
                    key={index}
                    className="w-full flex gap-3 mb-4 items-center"
                  >
                    <select
                      onChange={(e) =>
                        handleCategorySelection(index, e.target.value)
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={selection.selectedCategory}
                    >
                      <option value="" disabled hidden>
                        Select Category
                      </option>
                      {uniqueCategories.map((category) => (
                        <option
                          value={category}
                          key={category}
                          className={`${
                            category === "cpu" ? "uppercase" : "capitalize"
                          }`}
                        >
                          {category === "cpu"
                            ? category.toUpperCase()
                            : category.charAt(0).toUpperCase() +
                              category.slice(1).toLowerCase()}
                        </option>
                      ))}
                    </select>

                    <select
                      onChange={(e) =>
                        handleAssetSelection(index, e.target.value)
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={selection.selectedAsset}
                    >
                      <option value="" disabled hidden>
                        Select available {selection.selectedCategory}
                      </option>
                      {selection.availableSerialNos.map((serialNo) => (
                        <option key={serialNo} value={serialNo}>
                          {serialNo}
                        </option>
                      ))}
                    </select>

                    {/* Delete button */}
                    <button
                      type="button"
                      onClick={() => deleteSelection(index)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete selection"
                    >
                      <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18 17.94 6M18 18 6.06 6"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
                <div className="text-start">
                  <button
                    type="button"
                    onClick={addSelection}
                    className="text-white flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h14m-7 7V5"
                      />
                    </svg>
                    <p className="ml-1"> Add another asset</p>
                  </button>
                </div>
              </div>
            </div>

            <div className="text-end">
              <button
                type="button"
                className="text-white m-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Assign
              </button>
            </div>
          </form>

          {(deleteModal || editModal) && (
            <Modal
              editModal={editModal}
              deleteModal={deleteModal}
              setEditModal={setEditModal}
              setDeleteModal={setDeleteModal}
            >
              {deleteModal && <DeleteModalContent serialNo={serialNo} />}
              {editModal && (
                <EditModalContent serialNo={serialNo} user={type} />
              )}
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default UserDetails;
