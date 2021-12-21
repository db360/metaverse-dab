import { useMoralis } from "react-moralis";
import Image from "next/image";

import Avatar from "./Avatar";

const Header = () => {
  const { user } = useMoralis();
  return (
    <div>
      <div className="">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            src="/images/dab-logo.png"
            className="rounded-full"
          />
        </div>

        <div>
            <div className="relative h-48 w-48 lg:mx-auto">
            <Avatar logoutOnPress />

            </div>
            {/* WELCOME MESSAGE */}
            {/* USER NAME */}
            {/* Change username component */}
        </div>


      </div>
    </div>
  );
};

export default Header;
