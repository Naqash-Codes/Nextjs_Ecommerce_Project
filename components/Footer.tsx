import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 xl:px-24 pt-20">
      
      {/* TOP GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* EXCLUSIVE */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Exclusive</h2>

          <p className="font-medium mb-4">Subscribe</p>
          <p className="text-sm text-gray-400 mb-4">
            Get 10% off your first order
          </p>

          <div className="relative w-full max-w-60">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-black border border-gray-500 rounded-md py-3 px-4 pr-12 text-sm outline-none"
            />
            <Send
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            />
          </div>
        </div>

        {/* SUPPORT */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Support</h2>

          <p className="text-sm text-gray-400 leading-7">
            111 Bijoy sarani, Dhaka,
            <br />
            DH 1515, Bangladesh.
          </p>

          <p className="text-sm text-gray-400 mt-4">
            exclusive@gmail.com
          </p>

          <p className="text-sm text-gray-400 mt-2">
            +88015-88888-9999
          </p>
        </div>

        {/* ACCOUNT */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Account</h2>

          <ul className="space-y-4 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">My Account</li>
            <li className="hover:text-white cursor-pointer">
              Login / Register
            </li>
            <li className="hover:text-white cursor-pointer">Cart</li>
            <li className="hover:text-white cursor-pointer">Wishlist</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
          </ul>
        </div>

        {/* QUICK LINK */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Quick Link</h2>

          <ul className="space-y-4 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-white cursor-pointer">
              Terms Of Use
            </li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* DOWNLOAD APP */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Download App</h2>

          <p className="text-sm text-gray-400 mb-4">
            Save $3 with App New User Only
          </p>

          <div className="flex gap-4 mb-6">
            <img
              src="/images/qr-code.png"
              alt="QR Code"
              className="w-20 h-20"
            />

            <div className="flex flex-col gap-3">
              <img
                src="/images/google-play.png"
                alt="Google Play"
                className="w-28"
              />
              <img
                src="/images/app-store.png"
                alt="App Store"
                className="w-28"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <Facebook className="cursor-pointer hover:text-gray-300" />
            <Twitter className="cursor-pointer hover:text-gray-300" />
            <Instagram className="cursor-pointer hover:text-gray-300" />
            <Linkedin className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-800 mt-16" />

      {/* COPYRIGHT */}
      <p className="text-center text-sm text-gray-500 py-6">
        © Copyright Rimel 2022. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
