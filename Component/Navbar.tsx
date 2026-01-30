// import React from "react";
// import Image from "next/image";
// export default function Navbar() {
//   return (
//     <nav className="w-full bg-white/50 backdrop-blur-md dark:bg-black/50 border-b border-black/[.08] dark:border-white/[.145]">
//       <div className="mx-auto flex h-16 max-w-3xl items-center px-4 sm:px-16 flex-col">
//         <span className="text-lg font-semibold text-black dark:text-zinc-50">
//           MyApp
//         </span>
//         <Image
//           className="ml-auto "
//           src="/JAVASCRIPT LOGO.png"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//       </div>
//     </nav>
//   );
// }
"use client"; // Required because we are using a Hook (usePathname)

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Users", href: "/users" },
  ];

  return (
    <nav className="flex gap-6 p-4 border-b">
      {navLinks.map((link) => {
        // Check if the current path matches the link
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${
              isActive ? "text-blue-600 font-bold" : "text-gray-500"
            } hover:text-blue-400 transition-colors`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
