import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <img src="/logo-whole-notes.png" alt="logo" height={60} width={250} />
        </Link>
      </div>
      <div className="text-white space-x-4">
        <button className="bg-blue-300 px-4 py-1 rounded-md">Login</button>
      </div>
    </header>
  );
}

export default Header;
