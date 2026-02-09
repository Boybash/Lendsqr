"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="w-full bg-[#213F7D] p-5 flex items-center justify-center lg:justify-between">
      <Link href="/">
        <Image
          className="p-2 bg-white rounded-sm"
          src="/Group.png"
          alt="Next.js logo"
          width={150}
          height={20}
          priority
        />
      </Link>

      <input
        type="text"
        placeholder="Search for anything"
        className="w-full max-w-md px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#213f7d] focus:border-transparent transition"
      />
      <div className="flex gap-5 items-center">
        <h1>Docs</h1>
        <Bell size={20} className="mr-5" />
      </div>
    </nav>
  );
}
