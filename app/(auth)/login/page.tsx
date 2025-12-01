import SignInButton from "@/components/auth/signin-button";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="max-w-[400px] flex flex-col justify-center ">
      <h2 className="text-5xl font-medium">Login to Exclusive</h2>
      <p className="text-gray-700 mt-6 font-medium mb-8">
        Enter your details below
      </p>

      <form className="flex flex-col gap-6">
        <input
          type="email"
          placeholder="Email or Phone Number"
          className="border-b-2 border-gray-300 py-2 focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="border-b-2 border-gray-300 py-2 focus:outline-none"
        />
      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="bg-[#db4444]  text-white px-10 py-3 rounded-sm cursor-pointer hover:bg-red-600 transition"
        >
          Log in
        </button>

        <p className="text-red-500">Forgot Password?</p>
      </div>
      </form>
    </div>
  );
};

export default LoginPage;
