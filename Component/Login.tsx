import React from "react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <section className="flex justify-center items-center  gap-20">
      <section>
        <Image
          className=""
          src="/pablo-sign-in 1.png"
          alt="Login Illustration"
          width={1500}
          height={1500}
          priority
        />
      </section>

      <section>
        <div>
          <h1 className="font-bold text-">Welcome!</h1>
          <p>Enter details to login.</p>

          <form>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="password" placeholder="Password" />
            </div>
            <div>
              <h4> Forgot Password? </h4>
            </div>
            <button type="submit" className="login-btn">
              Log In
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}
