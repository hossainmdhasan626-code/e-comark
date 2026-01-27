import Link from "next/link";
import ButtonWrapper from "../../ui(reusable)/ButtonWrapper";

const SignInOut = () => {
  return (
    <>
      <div className="flex ">
        <Link href="/signin">
        <ButtonWrapper>SignIn</ButtonWrapper>
        </Link>
      </div>
    </>
  );
};

export default SignInOut;
