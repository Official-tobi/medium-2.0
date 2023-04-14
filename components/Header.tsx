import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import HeaderButton from "./HeaderButton";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto bg-medium-yellow">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://links.papareact.com/yvf"
            alt="Medium2.0 Brand Logo"
          />
        </Link>
      </div>
      <div className="flex items-center space-x-5 text-medium-black">
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>Our story</h3>
          <h3>Membership</h3>
          <h3>Write</h3>
        </div>
        <h3>Sign In</h3>
        <HeaderButton desc="Get started" />
      </div>
    </header>
  );
}

export default Header;
