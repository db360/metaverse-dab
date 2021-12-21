import { useMoralis } from "react-moralis";
import Image from "next/image";

import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-md border-b-2 border-pink-700 text-pink-600">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 m-4 hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            src="/images/dab-logo.png"
            className="rounded-full"
          />
        </div>

        <div className="col-span-4 text-left lg:text-center">
            <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-4 rounded-full">
            <Avatar logoutOnPress />
            </div>

            {/* WELCOME MESSAGE */}
            <h1 className="text-3xl">Welcome to Da.B's Metaverse</h1>

            <h2 className="text-5xl font-bold truncate">{user.get('username')}</h2>

            <ChangeUsername />
        </div>


      </div>
    </div>
  );
};

export default Header;
