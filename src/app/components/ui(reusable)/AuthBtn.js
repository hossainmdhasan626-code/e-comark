"use client"

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const AuthBtn = () => {

  const user = useSelector((state) => state.auth);
  const router = useRouter();

  const onClick = () => {
    if (!user?.fullName) {
      router.push("signup");
    } else {
      console.log("Card Details");
    }
  };
  return (
    <div>
      <button onClick={onClick} className="btn btn-primary btn-sm px-6">
        Add to card
      </button>
    </div>
  );
};

export default AuthBtn;
