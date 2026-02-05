import React from "react";
import Image from "next/image";
import { UserCircle2Icon } from "lucide-react";

export default function InfoCard() {
  return (
    <section className="absolute top-28 right-10 w-[80%] ">
      <h1 className="m-4 text-[#213F7D] font-semibold uppercase">Users</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#213F7D] p-6 rounded-md text-white flex flex-col gap-4 shadow-lg">
          <div>
            <UserCircle2Icon size={30} />
          </div>
          <div>
            <h2 className="uppercase font-semibold text-white">Users</h2>
            <p className="text-white">2,453</p>
          </div>
        </div>

        <div className="bg-[#213F7D]  p-6 rounded-md text-white flex flex-col gap-4 shadow-lg">
          <div>
            <UserCircle2Icon size={30} />
          </div>
          <div>
            <h2 className="uppercase font-semibold text-white">Active Users</h2>
            <p className="text-white">2,453</p>
          </div>
        </div>

        <div className="bg-[#213F7D]  p-6 rounded-md text-white flex flex-col gap-4 shadow-lg">
          <div>
            <UserCircle2Icon size={30} />
          </div>
          <div>
            <h2 className="uppercase font-semibold text-white">
              User With Loans
            </h2>
            <p className="text-white">12,453</p>
          </div>
        </div>

        <div className="bg-[#213F7D]  p-6 rounded-md text-white flex flex-col gap-4 shadow-lg">
          <div>
            <UserCircle2Icon size={30} />
          </div>
          <div>
            <h2 className="uppercase font-semibold text-white">
              User With Savings
            </h2>
            <p className="text-white">1022,453</p>
          </div>
        </div>
      </div>
    </section>
  );
}
