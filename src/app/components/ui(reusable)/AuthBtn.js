"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const AuthBtn = ({ children, className, routhName ,onClickAction}) => {
  const user = useSelector((state) => state.auth);
  const router = useRouter();

  const onClick = () => {
    if (!user?.fullName) {
      router.push("/signin");
    } else if (onClickAction) {
      onClickAction();
    } else if (routhName) {
      router.push(routhName);
    }
  };
  return (
    <div>
      <div onClick={onClick} className={`${className}`}>
        {children}
      </div>
    </div>
  );
};

export default AuthBtn;
