import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode}) {
  return (
  <div className="grid grid-cols-1 md:grid-cols-2 py-16">
      {/* Left Side Image */}
      <div className="flex items-center justify-center">
        <Image
          src="/images/signup-image.png" // <-- Replace with your image
          alt="signup"
          width={800}
          height={800}
          className=""
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full flex justify-center items-center">
        {children}
      </div>
  </div>
  );
}