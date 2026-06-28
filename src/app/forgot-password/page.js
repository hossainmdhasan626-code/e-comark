import ForgotPasswordForm from "../components/shared/forms/ForgotPasswordForm";

const page = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-orange-50 to-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
       {/* Decorative blurred blobs */}
       <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-mainColor/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
       <div className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] bg-[#ff7e5f]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
       <div className="absolute bottom-[-20%] left-[20%] w-[25rem] h-[25rem] bg-orange-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

       <div className="w-full max-w-md z-10 mt-10">
          <ForgotPasswordForm />
       </div>
    </div>
  );
};

export default page;
