"use client";

import React from "react";
import UserData from "../UserData";
import { Filter } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Users() {
  const [users, setUsers] = useState(UserData);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const itemsPerPage = 16;

  const filterByStatus = (status: string) => {
    const filteredUsers = UserData.filter((user) => user.status === status);
    setUsers(filteredUsers);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = UserData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(UserData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  interface User {
    index: number;
    userName: string;
    email: string;
    orgName: string;
    phoneNumber: number;
    lastActiveDate: string;
    status: string;
  }

  return (
    <table className="absolute top-85 right-5 w-[80%] p-6 bg-white rounded-md font-montserrat text-[#213F7D]">
      <thead>
        <tr className="uppercase pb-10 ">
          <th>
            <div className="flex items-center">
              <span className="text-left">Organization</span>
              <Filter size={16} className="ml-2 mb-1 inline-block" />
            </div>
          </th>

          <th>
            <div className="flex items-center">
              <span className="text-left">Username</span>
              <Filter size={16} className="ml-2 mb-1 inline-block" />
            </div>
          </th>

          <th>
            <div className="flex items-center">
              <span className="text-left">email</span>
              <Filter size={16} className="ml-2 mb-1 inline-block" />
            </div>
          </th>

          <th>
            <div className="flex items-center">
              <span className="text-left">Phone Number</span>
              <Filter size={16} className="ml-2 mb-1 inline-block" />
            </div>
          </th>

          <th className="flex items-center">
            <div className="flex items-center">
              <span className="text-left">Last Active Date</span>
              <Filter size={16} className="ml-2 mb-1 inline-block" />
            </div>
          </th>

          <th>
            <div className="flex items-center">
              <span className="text-left">Status</span>
              <Filter size={16} className="ml-2 mb-1 inline-block" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((user: User) => (
          <tr
            key={user.index}
            onClick={() => router.push(`/users/${user.index}`)}
            className=" border-b-2 border-[#213F7D1A] hover:bg-[#21407d45] text-[#213F7D] cursor-pointer"
          >
            <td className="px-2 py-4"> {user.orgName}</td>
            <td className="px-2 py-4">{user.userName}</td>
            <td className="px-2 py-4"> {user.email}</td>
            <td className="px-2 py-4"> {user.phoneNumber}</td>
            <td className="px-2 py-4"> {user.lastActiveDate}</td>
            <td className="px-2 py-4">
              <span
                className={`
                  px-4 py-1 rounded-full text-sm
                  ${user.status === "Active" ? "bg-green-100 text-green-700" : ""}
                  ${user.status === "Inactive" ? "bg-slate-100 text-slate-700" : ""}
                  ${user.status === "Pending" ? "bg-amber-100 text-amber-700" : ""}
                  ${user.status === "Blacklisted" ? "bg-red-100 text-red-700" : ""}
                `}
              >
                {user.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={6} className="py-2">
            <div className="flex justify-end w-full">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="px-4 py-2 m-2 bg-[#213F7D] text-white rounded disabled:bg-gray-300 disabled:text-gray-500 cursor-pointer"
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={
                  currentPage === Math.ceil(UserData.length / itemsPerPage)
                }
                className="px-4 py-2 m-2 bg-[#213F7D] text-white rounded disabled:bg-gray-300 disabled:text-gray-500 cursor-pointer"
              >
                Next
              </button>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
