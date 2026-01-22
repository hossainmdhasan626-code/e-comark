"use client";
import React, { useState } from "react";
import footerData from "../../../../data/FooterData";

const FooterComponent = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="w-full bg-neutral text-neutral-content">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Join Our Newsletter</h3>
              <p className="text-sm md:text-base opacity-90">Sign up for exclusive deals, new arrivals & electronics news</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full md:w-96 bg-white text-gray-900"
                required
              />
              <button type="submit" className="btn bg-yellow-500 hover:bg-yellow-600 text-gray-900 border-none px-8 font-semibold">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gray-900">
        <div className="container mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-4 text-white">{footerData.companyInfo.name}</h2>
              <p className="text-sm mb-6 text-gray-400 leading-relaxed">{footerData.companyInfo.description}</p>
              <div className="space-y-3 text-sm">
                <p className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{footerData.contact.email}</span>
                </p>
                <p className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{footerData.contact.phone}</span>
                </p>
                <p className="flex items-start gap-3 text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{footerData.contact.address}</span>
                </p>
              </div>
            </div>

            {/* Footer Links */}
            {footerData.sections.map((section) => (
              <nav key={section.id}>
                <h6 className="font-bold text-base mb-5 text-white uppercase tracking-wide">
                  {section.title}
                </h6>
                <ul className="space-y-3">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a href={link.path} className="text-sm text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                        {link?.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-sm text-center lg:text-left text-gray-400 order-2 lg:order-1">
              <p>{footerData.companyInfo.copyRight}</p>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-col sm:flex-row items-center gap-4 order-1 lg:order-2">
              <span className="text-sm font-semibold text-gray-300">We Accept:</span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {/* Visa */}
                <div className="bg-white rounded px-3 py-2 h-10 flex items-center justify-center min-w-[50px] shadow-md">
                  <svg className="h-6 w-auto" viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="32" rx="4" fill="#ffffff"/>
                    <path d="M21.3 20.5h-2.8l1.8-11h2.8l-1.8 11zm11-10.7c-.6-.2-1.5-.4-2.6-.4-2.9 0-4.9 1.5-4.9 3.7 0 1.6 1.5 2.5 2.6 3 1.1.5 1.5.9 1.5 1.4 0 .7-.9 1.1-1.7 1.1-1.1 0-1.7-.2-2.6-.6l-.4-.2-.4 2.3c.7.3 1.9.6 3.2.6 3.1 0 5.1-1.5 5.1-3.8 0-1.3-.8-2.2-2.5-3-1-.5-1.6-.9-1.6-1.4 0-.5.5-.9 1.7-.9.9 0 1.6.2 2.1.4l.3.1.4-2.3zm6.4-2.3h-2.2c-.7 0-1.2.2-1.5.9l-4.3 10.1h3.1s.5-1.4.6-1.7h3.8c.1.4.4 1.7.4 1.7h2.7l-2.6-11zm-3.6 7.1c.2-.6 1.2-3.2 1.2-3.2s.3-.7.4-1.1l.2 1s.6 2.9.8 3.5h-2.6zm-16.2-7.1l-2.7 7.5-.3-1.5c-.5-1.7-2.1-3.5-3.9-4.4l2.5 9.4h3.1l4.6-11h-3.3z" fill="#1434CB"/>
                  </svg>
                </div>

                {/* Mastercard */}
                <div className="bg-white rounded px-3 py-2 h-10 flex items-center justify-center min-w-[50px] shadow-md">
                  <svg className="h-6 w-auto" viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="16" r="10" fill="#EB001B"/>
                    <circle cx="30" cy="16" r="10" fill="#F79E1B"/>
                    <path d="M24 8.5c-1.9 1.6-3 4-3 6.5s1.1 4.9 3 6.5c1.9-1.6 3-4 3-6.5s-1.1-4.9-3-6.5z" fill="#FF5F00"/>
                  </svg>
                </div>

                {/* American Express */}
                <div className="bg-white rounded px-3 py-2 h-10 flex items-center justify-center min-w-[50px] shadow-md">
                  <svg className="h-6 w-auto" viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="32" rx="4" fill="#016FD0"/>
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">AMEX</text>
                  </svg>
                </div>

                {/* PayPal */}
                <div className="bg-white rounded px-3 py-2 h-10 flex items-center justify-center min-w-[50px] shadow-md">
                  <svg className="h-6 w-auto" viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5 8h5.7c2.8 0 4.8 1.8 4.8 4.3 0 3.2-2.2 5.7-5.3 5.7h-2.4l-.8 4h-2.8l2.8-14zm3.2 7.5h1.6c1.5 0 2.7-1 2.7-2.5 0-1-.7-1.7-1.9-1.7h-1.6l-.8 4.2zm8.8-7.5h2.8l-.5 2.5h.1c.8-1.8 2.3-2.8 3.9-2.8.2 0 .5 0 .7.1l-.6 2.9c-.3-.1-.6-.1-.9-.1-1.8 0-3.2 1.4-3.6 3.4l-.9 5h-2.8l2.8-11z" fill="#003087"/>
                  </svg>
                </div>

                {/* Discover */}
                <div className="bg-white rounded px-3 py-2 h-10 flex items-center justify-center min-w-[50px] shadow-md">
                  <svg className="h-6 w-auto" viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="32" rx="4" fill="#FF6000"/>
                    <circle cx="38" cy="16" r="8" fill="#F79E1B"/>
                  </svg>
                </div>

                {/* Apple Pay */}
                <div className="bg-white rounded px-3 py-2 h-10 flex items-center justify-center min-w-[50px] shadow-md">
                  <svg className="h-6 w-auto" viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 12c-.5.6-1.3.9-2.1.9-.1-.8.2-1.6.6-2.1.5-.6 1.3-.9 2-.9.1.8-.2 1.5-.5 2.1zm.5 1c-1.1-.1-2 .6-2.5.6s-1.3-.6-2.2-.6c-1.1 0-2.1.6-2.7 1.6-1.2 2-.3 4.9.8 6.5.5.8 1.2 1.6 2 1.6.9 0 1.2-.6 2.3-.6 1.1 0 1.3.6 2.2.6.9 0 1.4-.8 2-1.6.6-.9 1-1.8 1-1.8s-2-.8-2-3c0-1.9 1.5-2.8 1.6-2.8-.9-1.3-2.3-1.4-2.7-1.5z" fill="#000"/>
                    <text x="60%" y="60%" dominantBaseline="middle" textAnchor="start" fill="black" fontSize="8" fontWeight="500">Pay</text>
                  </svg>
                </div>

                {/* Google Pay */}
                <div className="bg-white rounded px-3 py-2 h-10 flex items-center justify-center min-w-[50px] shadow-md">
                  <svg className="h-6 w-auto" viewBox="0 0 48 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5 17.5v-4h6.7c.1.3.1.7.1 1.1 0 1.3-.4 2.9-1.5 4-1 1.1-2.3 1.6-4 1.6-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8c1.7 0 3 .7 3.9 1.5l-1.1 1.1c-.7-.6-1.6-1.1-2.8-1.1-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1c1.5 0 2.3-.6 2.8-1.1.5-.5.8-1.2.9-2.1h-3.7v-1.7h5.4z" fill="#4285F4"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 order-3">
              <span className="text-sm font-semibold text-gray-300">Follow Us:</span>
              <div className="flex gap-3">
                {footerData.socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-blue-600 p-2.5 rounded-full transition-all duration-200 hover:scale-110"
                    aria-label={social.platform}
                  >
                    {social.id === "facebook" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current text-white">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    )}
                    {social.id === "twitter" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current text-white">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    )}
                    {social.id === "instagram" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current text-white">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                      </svg>
                    )}
                    {social.id === "youtube" && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-current text-white">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
