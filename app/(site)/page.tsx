import Image from "next/image";
import AuthForm from "./components/AuthForm";

// import Lottie from "react-lottie";
import message from "@/animation/message.json";

const Auth = () => {
  // const defaultOptions = {

  //   loop: true,
  //   autoplay: true,
  //   animationData: message,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }

  // }

  return (
    <div
      className="
        flex 
        min-h-full 
        flex-row
        justify-center 
        py-12 
        sm:px-6 
        lg:px-8 
        // bg-gray-100
        bg-blue-700
      "
    >
      <div className=" hidden sm:flex flex-1  flex-col justify-center items-center ">
        <div className="flex justify-center flex-col  items-start w-3/4 h-1/6">
          <div className="inline-flex justify-center items-center">
            <Image
              width={80}
              height={80}
              alt="logo"
              src="/images/logoMessage.png"
            />
            <h1 className="ml-3 font-extrabold text-3xl ">WeeChat</h1>
          </div>
        </div>
        <div className="w-full flex  justify-center items-center h-5/6 relative ">
        <Image
             fill
              alt="logo"
              src="/images/messaging.svg"
              className="relative"
            />
        </div>
        {/* <div className="w-full h-2/6  "></div> */}
      </div>

      <div className=" flex-1 flex justify-center items-center flex-col bg-white ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md ">
          <h1
            className="     mt-6 
          text-left 
          text-3xl 
          font-bold 
          tracking-tight 
          text-gray-900"
          >
            Welcome Here !
          </h1>
          <h2
            className=" mt-2
       
          "
          >
            Sign in to your account
          </h2>
        </div>
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
