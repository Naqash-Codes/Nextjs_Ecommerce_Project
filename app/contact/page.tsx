import React from "react";
import { Phone, Mail } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="max-w-7xl h-[90vh] flex justify-center items-center mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* LEFT INFO BOX */}
        <div className="bg-white rounded-md p-6 space-y-6">
          {/* Call To Us */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 items-center ">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white">
                <Phone size={18} />
              </div>
              <h4 className="font-semibold text-2xl mb-1">Call To Us</h4>
            </div>
            <div className="text-lg">
              <p className="">
                We are available 24/7, 7 days a week.
              </p>
              <p className=" mt-1">Phone: +8801611112222</p>
            </div>
          </div>

          <hr />

          {/* Write To Us */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white">
                <Mail size={18} />
              </div>
              <h4 className="font-semibold text-lg mb-1">Write To Us</h4>
            </div>
            <div className="text-lg">
              <p className="">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="mt-1">Emails: customer@exclusive.com</p>
              <p className="">Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="md:col-span-2 bg-white rounded-md p-6">
          <form className="space-y-6">
            {/* Top Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full px-4 py-3 bg-gray-100 rounded outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email*"
                className="w-full px-4 py-3 bg-gray-100 rounded outline-none focus:ring-1 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Your Phone*"
                className="w-full px-4 py-3 bg-gray-100 rounded outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Message */}
            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full h-[220px] px-4 py-3 bg-gray-100 rounded outline-none resize-none focus:ring-1 focus:ring-red-500"
            />

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded hover:bg-red-600 transition cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
