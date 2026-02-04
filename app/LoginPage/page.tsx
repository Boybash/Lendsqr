import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row justify-center items-center px-6 py-12 lg:gap-20 bg-gray-50">
      <section className="hidden lg:block w-full ml-30 max-w-[600px]">
        <Image
          className="w-full h-auto object-contain "
          src="/pablo-sign-in 1.png"
          alt="Login Illustration"
          width={600}
          height={600}
          priority
        />
      </section>

      <section className="w-full flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-6 sm:p-10 rounded-xl shadow-lg border border-gray-100">
          {/* Mobile-only Illustration (Optional: small version for mobile) */}
          <div className="lg:hidden flex justify-center mb-6">
            <Image
              src="/pablo-sign-in 1.png"
              alt="Logo"
              width={150}
              height={150}
            />
          </div>

          <div className="mb-8 text-center lg:text-left">
            <h1 className="font-montserat font-bold text-3xl text-[#213f7d] mb-2">
              Welcome!
            </h1>
            <p className="text-gray-500">Enter details to login.</p>
          </div>

          <form className="space-y-5">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#213f7d] focus:border-transparent transition"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#213f7d] focus:border-transparent transition"
              />
            </div>

            <div className="flex justify-end">
              <h4 className="text-sm font-semibold text-[#213f7d] hover:underline cursor-pointer">
                Forgot Password?
              </h4>
            </div>

            <button
              type="submit"
              className="w-full bg-[#39CDCC] text-white font-bold py-3 rounded-md hover:bg-[#1a3263] transition duration-300 shadow-lg active:scale-[0.98] cursor-pointer"
            >
              Log In
            </button>
            <Link
              href="/Dashboard"
              type="submit"
              className="w-full bg-[#39CDCC] text-white font-bold py-3 rounded-md hover:bg-[#1a3263] transition duration-300 shadow-lg active:scale-[0.98] cursor-pointer"
            >
              Dashboard
            </Link>
          </form>
        </div>
      </section>
    </section>
  );
}
