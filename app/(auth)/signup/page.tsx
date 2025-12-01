import SignInButton from "@/components/auth/signin-button";
import Link from "next/link";

export default function SignUpPage() {
  return (
        <div className="max-w-[400px] flex flex-col justify-center ">
          <h2 className="text-5xl font-medium">Create an account</h2>
          <p className="text-gray-700 mt-6 font-medium mb-8">
            Enter your details below
          </p>

          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Name"
              className="border-b-2 border-gray-300 focus:outline-none py-2"
            />

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

            <button
              type="submit"
              className="bg-[#db4444] text-white py-3 rounded-sm cursor-pointer hover:bg-red-600 transition"
            >
              Create Account
            </button>

            {/* Google Sign Up Button */}
            <SignInButton />
          </form>

          <p className="mt-6 text-gray-700">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 underline">
              Log in
            </Link>
          </p>
        </div>
  );
}
