import Image from "next/image";
import { User } from "lucide-react";
import { Users } from "lucide-react";

export default function Sidebar() {
  return (
    <section className="w-[250px] sticky top-0 flex flex-col text-[#213F7D]  py-10 border-r border-b border-gray-200 min-h-screen font-montserrat">
      <div className="flex items-center gap-3  px-3">
        <span>
          <Image
            src="/briefcase 1.png"
            alt="Dashboard Image"
            width={20}
            height={20}
          />
        </span>
        <h1 className="text-[16px] text-[#213F7D]">Switch Organization</h1>
      </div>
      <div className="flex items-center gap-3 mt-1 p-3">
        <span>
          <Image
            src="/home 1.png"
            alt="Dashboard Image"
            width={20}
            height={20}
          />
        </span>
        <h1 className="text-center text-[16px] text-[#213F7D]">Dashboard</h1>
      </div>
      <section className="border-t border-gray-200 mt-1 pt-6">
        <h1 className="text-[16px] font-bold ml-10  mt-1">Customers</h1>
        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Users</h2>
        </div>
        <div className="flex items-center gap-3 mt-1 p-3">
          <Users size={20} className="" />
          <h2 className="text-center text-[16px]">Gurantors</h2>
        </div>
        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Loans</h2>
        </div>
        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Decision Model</h2>
        </div>
        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Savings</h2>
        </div>
        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Loan Request</h2>
        </div>
        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Whitelist</h2>
        </div>
        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Karma</h2>
        </div>

        <h1 className="text-[16px] font-bold ml-10  mt-1">Businesses</h1>

        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Organization</h2>
        </div>
        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Loan Products</h2>
        </div>
        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Savings Products</h2>
        </div>
        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Fees and Charges</h2>
        </div>
        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Transactions</h2>
        </div>
        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Services</h2>
        </div>
        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Service Account</h2>
        </div>
        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Settlements</h2>
        </div>
        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Reports</h2>
        </div>

        <h1 className="text-[16px] font-bold ml-10  mt-1">Settings</h1>

        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Preferences</h2>
        </div>
        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Fees and Pricing</h2>
        </div>
        <div className="flex items-center gap-3 mt-1 p-3">
          <User size={20} className="" />
          <h2 className="text-center text-[16px]">Audit Logs</h2>
        </div>
      </section>
    </section>
  );
}
