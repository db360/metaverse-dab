import Image from "next/image";
import { useMoralis } from "react-moralis";
import ReactLoading from "react-loading";

function Login() {
  const { authenticate, isAuthenticating } = useMoralis();

  return (
    <>
      {" "}
      <div className="bg-black relative text-white">
        <div className="flex flex-col absolute z-50 h-4/4 w-full items-center justify-center space-y-1 mt-10">
          <Image
            className="object-cover p-2"
            src="/images/dab-logo.png"
            height={300}
            width={500}
          />
          {!isAuthenticating ? (
            <button
              onClick={authenticate}
              className="border-2 border-opacity-50 backdrop-filter backdrop-blur-sm px-5 py-3 text-white hover:px-8 hover:bg-opacity-20 hover:bg-white transition-all duration-700 ease-in-out rounded-full "
            >
              Login Now
            </button>
          ) : (
            <>
            <h1 className="m-0 animate-pulse">Waiting for Metamask</h1>
            <ReactLoading
              className="bottom-0 backdrop-filter"
              type="cylon"
              color="#AD0786"
              width={150}
              delay={10}
            />
            </>
          )}
        </div>

        <div className="relative w-full h-screen">
          <Image
            src="/images/background1.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </>
  );
}

export default Login;
