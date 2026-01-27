import React from "react";
import Logo from "./Logo";
import FooterComponent from "./Footer";

const SignUpInLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* header */}
      <header className="md:flex md:justify-between md:items-center md:mx-7 px-4">
        <div className="my-6">
          <Logo />
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        {children}
      </main>

      {/* footer */}
      <footer className="w-full">
        <FooterComponent />
      </footer>
    </div>
  );
};

export default SignUpInLayout;
