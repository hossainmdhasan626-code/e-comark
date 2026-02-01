import Link from "next/link";
import ButtonWrapper from "../../ui(reusable)/ButtonWrapper";

const SignInOut = () => {
  return (
    <>
      <Link href="/signin">
        <ButtonWrapper>
          <div className="w-5 md:w-14 flex justify-center items-center">SignIn</div>
        </ButtonWrapper>
      </Link>
    </>
  );
};

export default SignInOut;
