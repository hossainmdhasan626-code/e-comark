"use client"

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const AuthBtn = ({children,className,routhName}) => {

  const user = useSelector((state) => state.auth);
  const router = useRouter();

  const onClick = () => {
    if (!user?.fullName) {
      router.push("signin");
    } else {
      router.push(routhName);
    }
  };
  return (
    <div>
      <button onClick={onClick} className={`${className}`}>
        {children}
      </button>
    </div>
  );
};

export default AuthBtn;
