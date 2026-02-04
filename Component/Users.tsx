import React from "react";
import UserData from "./UserData";
import { Filter } from "lucide-react";
import Image from "next/image";
export default function Users() {
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
        {UserData.map((user: User) => (
          <tr
            key={user.index}
            className=" border-b-2 border-[#213F7D1A] hover:bg-amber-50 text-[#213F7D]"
          >
            <td className="px-2 py-4"> {user.orgName}</td>
            <td className="px-2 py-4">{user.userName}</td>
            <td className="px-2 py-4"> {user.email}</td>
            <td className="px-2 py-4"> {user.phoneNumber}</td>
            <td className="px-2 py-4"> {user.lastActiveDate}</td>
            <td className="bg-amber-300 p-1 rounded-full text-center">
              {" "}
              {user.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
